import { Component } from '@angular/core';
import { ITodo } from './models/todo';
import { ItemsTodo } from './data/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  todos: ITodo[] = ItemsTodo;
}
