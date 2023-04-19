import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PostApiService } from 'src/app/services/post-api.service';
import  globalTexts  from 'src/app/static/global-text.json'
import { ModalComponent } from '../modal/modal.component';
import { ListPostComponent } from '../list-post/list-post.component';
@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  @ViewChild(ListPostComponent) listPostComponent!: ListPostComponent;
  globalTexts = globalTexts;
formPostAdd:FormGroup;
constructor(
  public form:FormBuilder,
    private apiService:PostApiService,
    private router: Router,
){
  this.formPostAdd=this.form.group({
    title:[''],
    body:[''],
  })
}
  ngOnInit(): void {
  
  }

  closeModal() {
    const modelDiv = document.getElementById('myModal');
    if (modelDiv != null) {
      modelDiv.style.display = 'none';
    }
  }
  sendData():any{
    
    this.apiService.AddPost(this.formPostAdd.value).subscribe(
      (json)=>{
        console.log(json);
      }


    );
    this.router.navigateByUrl('list-employee');
  
  }

}
