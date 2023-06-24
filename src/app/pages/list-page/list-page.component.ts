import { Component } from '@angular/core';
import { ITodo } from '../../models/todo';
import { ItemsTodo } from '../../data/data';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
})
export class ListPageComponent {
  todos: ITodo[] = ItemsTodo;
}
