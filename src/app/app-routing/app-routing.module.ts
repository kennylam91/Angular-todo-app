import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {TodoComponent} from '../todo/todo.component';
import {TodoDetailComponent} from '../todo-detail/todo-detail.component';
import {TodoListComponent} from '../todo-list/todo-list.component';

const routes: Routes = [
  {
    path: 'todos', component: TodoListComponent,
    children: [{
      path: 'title', component: TodoDetailComponent
    }]
  },
  {path: '', redirectTo: '/todos', pathMatch: 'full'}];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule {
}
