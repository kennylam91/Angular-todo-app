import {Component, OnInit} from '@angular/core';
import {ITodo} from '../todo/Todo';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss']
})
export class TodoDetailComponent implements OnInit {
  todo: ITodo;
  sub: Subscription;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.todo = {
      title: '',
      complete: false
    };
    this.sub = this.activatedRoute.paramMap
      .subscribe((paramMap: ParamMap) => {
        this.todo.title = paramMap.get('title');
      });
  }

  update() {
    this.router.navigateByUrl('todos');
  }
}
