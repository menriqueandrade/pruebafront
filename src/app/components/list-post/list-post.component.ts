import { Component, OnInit } from '@angular/core';
import { PostApiService } from 'src/app/services/post-api.service';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {
  
  limit: number = 10;
  startIndex: number = 0;
  numResults = 10;
  endIndex: number = this.limit;
  resultsToShow = this.numResults;
  post: any;
  constructor(
    private postService: PostApiService,


  ) { }
  ngOnInit(): void {
    


    setTimeout(() => {
      this.postService.getPosts().subscribe(response => {
        this.post = response;
      });
      //bar charge
      
    },
      500);
  }

  deleteEmployee(id: any, iControl: any) {
    console.log(id);
    console.log(iControl);
    if (window.confirm("¿Esta seguro de borrar??")) {
      this.postService.deleteEmployee(id).subscribe((response) => {
        console.log(response);
      
        this.post.splice(iControl, 1)
      });
    }
  }
  showMore() {
    this.startIndex += this.limit;
    this.endIndex = this.startIndex + this.limit;
  }

}
