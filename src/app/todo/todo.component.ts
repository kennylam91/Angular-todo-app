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
  private todo = {
    id: 1,
    content: 'Do exercise',

  };

  constructor() {
  }

}
