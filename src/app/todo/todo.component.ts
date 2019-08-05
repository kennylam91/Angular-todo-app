import {Component, OnInit} from '@angular/core';

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
