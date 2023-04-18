import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostApiService {
  API: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private postHttp: HttpClient) { 
    
  }
  getPosts(){
    return this.postHttp.get(this.API)
  }
  deleteEmployee(id: any): Observable<any> {

    return this.postHttp.get(this.API + "/" + id)
  }
}
