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

        console.error(error);
        return of('Ocurrió un error al obtener todos los Posts');

      })
    )
  }
  AddPost(dataEmployee: any): Observable<any> {
    return this.postHttp.post(this.API + "?/=", dataEmployee).pipe(
      catchError((error: any) => {

        console.error(error);

        return of('Ocurrió un error al Agregar el post');
      })
    )
  }
  deletePost(id: any): Observable<any> {

    return this.postHttp.get(this.API + "/" + id).pipe(
      catchError(error => {
        console.error(error);
        return of('Ocurrió un error al eliminar el post');
      })
    );
  }
  getPostsIdEdit(id: any): Observable<any> {
    return this.postHttp.get(this.API + "?/=" + id).pipe(
      catchError(error => {
        console.error(error);
        return of('Ocurrió un error al editar el post');
      })
    );
  }
  editPost(id: any, dataEmployee: any): Observable<any> {
    let edited = this.postHttp.post(this.API + "?/=" + id, dataEmployee)
      .pipe(
        catchError(error => {
          console.log('Error al editar el post:', error);
          return of('No se pudo editar el post');

        })
      );
    this.getPosts();
    return edited;
  }
}
