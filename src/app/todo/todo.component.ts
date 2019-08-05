import {Component, OnInit} from '@angular/core';

interface ITodo {
  id: number;
  content: string;
  complete: boolean;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})

export class TodoComponent {
  todos: Array<ITodo> = [
    {
      id: 1,
      content: 'doing',
      complete: false

    },
    {
      id: 2,
      content: 'playing',
      complete: false
    }];

  constructor() {
  }

}
