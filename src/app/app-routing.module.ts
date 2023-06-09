import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import { ListPostComponent } from './components/list-post/list-post.component';
import { AddPostComponent } from './components/add-post/add-post.component';



const routes: Routes = [

    {
        path: '', pathMatch: 'full', redirectTo: 'list-employee',
    },
    {
        path: 'list-employee', pathMatch: 'full', component: ListPostComponent,
    },
    {
        path: 'edit-employee/:id', component: EditPostComponent
    },
    {
        path: 'add-employee', pathMatch: 'full', component: AddPostComponent,
    },


];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
