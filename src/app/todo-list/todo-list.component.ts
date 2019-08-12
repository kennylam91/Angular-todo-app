import {Component, OnInit} from '@angular/core';
import {ITodo} from '../todo/Todo';
import {TodoService} from '../todo/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos: ITodo[];

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    this.todos = this.todoService.todoList;
  }

}
