import {Injectable} from '@angular/core';
import {ITodo} from './Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoList: ITodo[] = [
    {title: 'abc', complete: false},
    {title: 'xyz', complete: false},
    {title: 'ghj', complete: false},
  ];

  create(todo: ITodo): void {
    this.todoList.push(todo);
    console.log(this.todoList);
  }

  constructor() {
  }
}
