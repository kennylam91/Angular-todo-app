import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormsModule, FormGroup, Validators} from '@angular/forms';
import {ITodo} from './Todo';
import {TodoService} from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})

export class TodoComponent implements OnInit {
  todos: ITodo[];
  todoForm: FormGroup;
  todo: ITodo;

  create(value: string): void {
    if (this.todoForm.valid) {
      this.todo = {
        title: value,
        complete: false
      };
      this.todoService.create(this.todo);
    }
  }


  constructor(private formBuilder: FormBuilder, private todoService: TodoService) {
  }

  ngOnInit(): void {
    this.todoForm = this.formBuilder.group({
      title: ['', Validators.required]
    });
    this.todos = this.todoService.todoList;
    console.log(this.todos);
  }


}
