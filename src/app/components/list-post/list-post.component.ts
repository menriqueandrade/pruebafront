import { Component, OnInit } from '@angular/core';
import { PostApiService } from 'src/app/services/post-api.service';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {
  post:any;
  constructor(
    private postService: PostApiService,


  ) { }
  ngOnInit(): void {
    setTimeout(() => {
      this.postService.getPosts().subscribe(response => {
        console.log(response);
        this.post = response;
      });
    },
      500);
  }

  deleteEmployee(id: any, iControl: any) {
    console.log(id);
    console.log(iControl);
    if (window.confirm("¿Esta seguro de borrar??")) {
      this.postService.deleteEmployee(id).subscribe((response) => {
        console.log(response);
        //indice de control frame
        this.post.splice(iControl, 1)
      });
    }
  }

}
