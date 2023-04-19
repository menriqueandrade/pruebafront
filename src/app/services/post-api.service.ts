import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostApiService {
  API: string = 'https://jsonplaceholder.typicode.com/posts';
  banderita!: boolean;
  constructor(private postHttp: HttpClient) { 
    
  }
  getPosts(){
    this.banderita = true;
    return this.postHttp.get(this.API)
  }
  AddEmployeeComponent(dataEmployee: any): Observable<any> {
    return this.postHttp.post(this.API + "?/=", dataEmployee)

  }
  deleteEmployee(id: any): Observable<any> {

    return this.postHttp.get(this.API + "/" + id)
  }
  getPostsIdEdit(id: any): Observable<any>{
    return this.postHttp.get(this.API+"?/="+id)
  }
  editEmployee(id: any, dataEmployee: any): Observable<any> {
    this.banderita = false;
    let edited= this.postHttp.post(this.API + "?/=" + id, dataEmployee)
    this.getPosts();
     return edited;

  }
}
