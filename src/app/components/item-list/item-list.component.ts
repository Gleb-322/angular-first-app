import { Component, Input } from '@angular/core';
import { ITodo } from 'src/app/models/todo';

@Component({
  selector: 'item-list',
  templateUrl: './item-list.component.html',
})
export class ItemListComponent {
  @Input() listTodo: ITodo;
}
