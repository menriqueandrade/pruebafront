import { Component, OnInit } from '@angular/core';
import { PostApiService } from 'src/app/services/post-api.service';
//import globalTexts
import  globalTexts  from 'src/app/static/global-text.json';


@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {
  globalTexts = globalTexts;
  loading = false;
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
      this.loading = true; 
      this.postService.getPosts().subscribe(response => {
        this.post = response;
        this.loading = false;
      });
     
      
    },
      700);
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
  showMore() {
    this.startIndex += this.limit;
    this.endIndex = this.startIndex + this.limit;
  }

}
