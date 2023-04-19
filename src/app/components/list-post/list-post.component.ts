import { Component, OnInit, Renderer2 } from '@angular/core';
import { PostApiService } from 'src/app/services/post-api.service';

import globalTexts from 'src/app/static/global-text.json';


@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {


  globalTexts = globalTexts;
  loading = false;
  public page = 6;
  public pageSize = 6;
  post: any[] = [];
  constructor(
    private postService: PostApiService,
    

  ) { }



  ngOnInit(): void {
    setTimeout(() => {
      this.loading = true;
      this.postService.getPosts().subscribe(response => {
        this.post = response as any[];
        this.loading = false;
      }
      );
    },
      700);
  }
  onConfirm() {
    console.log('Action confirmed');
  }
  openModal() {

    const modelDiv = document.getElementById('myModal');
    if (modelDiv != null) {
      modelDiv.style.display = 'block';
    }
  }

  closeModal() {
    const modelDiv = document.getElementById('myModal');
    if (modelDiv != null) {
      modelDiv.style.display = 'none';
    }
  }
  deleteEmployee(id: any, iControl: any) {
    console.log(id);
    console.log(iControl);
    if (window.confirm("¿Esta seguro de borrar??")) {
      this.postService.deletePost(id).subscribe((response) => {
        console.log(response);

        this.post.splice(iControl, 1)
      });
    }
  }

  openModal2() {

    const modelDiv = document.getElementById('myModalEdit');
    if (modelDiv != null) {
      modelDiv.style.display = 'block';
    }
  }

}
