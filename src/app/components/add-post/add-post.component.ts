import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PostApiService } from 'src/app/services/post-api.service';
import  globalTexts  from 'src/app/static/global-text.json'
@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
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
  sendData():any{
    
    this.apiService.AddPost(this.formPostAdd.value).subscribe(
      (json)=>{
        console.log(json);
      }


    );
    this.router.navigateByUrl('list-employee');
  
  }

}
