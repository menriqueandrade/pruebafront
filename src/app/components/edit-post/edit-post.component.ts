import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostApiService } from 'src/app/services/post-api.service';
import  globalTexts  from 'src/app/static/global-text.json';
@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  globalTexts = globalTexts;
  getID: any;
  formPostEdit: FormGroup;
  constructor(
    public form: FormBuilder,
    private activeRoute: ActivatedRoute,
    private apiService: PostApiService,
    private router: Router,
  ) {
    this.getID = this.activeRoute.snapshot.paramMap.get('id');
    this.apiService.getPostsIdEdit(this.getID).subscribe(
      response => {
        for (let i = 0; i < response.length; i++) {
          if (response[i]['id'] == this.getID) {
            this.formPostEdit.setValue(
              {
               
                title: response[i]['title'] ,
                body: response[i]['body'],
              }
            );
          }
        }
      }
    )
    
    this.formPostEdit = this.form.group({
  
      title: [''],
      body: [''],
    });
    console.log(this.formPostEdit.value);
  }
  ngOnInit(): void {
   
  }
  sendDataEdit(): any {
    // console.log(this.getID);
    console.log(this.formPostEdit.value);
    this.apiService.editPost(this.getID, this.formPostEdit.value).subscribe((respuesta => {
     
    }));
   this.router.navigateByUrl('list-employee');
  }
}
