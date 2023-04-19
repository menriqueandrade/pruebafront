import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostApiService {
  API: string = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private postHttp: HttpClient) {
  }
  getPosts() {
    return this.postHttp.get(this.API).pipe(
      catchError((error: any) => {
        const errorMessage = 'Ocurrió un error al obtener todos los Posts';
        alert(errorMessage); 
        return throwError(errorMessage); 
      })
    )
  }
  AddPost(dataEmployee: any): Observable<any> {
    return this.postHttp.post(this.API + "?/=", dataEmployee).pipe(
      catchError((error: any) => {
        const errorMessage = 'Ocurrió un error al Agregar un Posts';
        alert(errorMessage); 
        return throwError(errorMessage); 
      })
    )
  }
  deletePost(id: any): Observable<any> {

    return this.postHttp.get(this.API + "/" + id).pipe(
      catchError((error: any) => {
        const errorMessage = 'Ocurrió un error al borrar el Posts con id:' + id;
        alert(errorMessage); 
        return throwError(errorMessage);
      })
    );
  }
  getPostsIdEdit(id: any): Observable<any> {
    return this.postHttp.get(this.API + "?/=" + id).pipe(
      catchError((error: any) => {
        const errorMessage = 'Ocurrió un error al editar el Posts con id:' + id;
        alert(errorMessage); 
        return throwError(errorMessage); 
      })
    );
  }
  editPost(id: any, dataEmployee: any): Observable<any> {
    let edited = this.postHttp.post(this.API + "?/=" + id, dataEmployee)
      .pipe(
        catchError((error: any) => {
          const errorMessage = 'Ocurrió un error al editar';
          alert(errorMessage); 
          return throwError(errorMessage); 
        })
      );
    this.getPosts();
    return edited;
  }
}
