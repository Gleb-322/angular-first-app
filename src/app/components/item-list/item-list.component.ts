import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Items } from 'src/app/app.component';

@Component({
  selector: 'item-list',
  templateUrl: './item-list.component.html',
})
export class ItemListComponent {
  @Input() listItems: Items[] = [];

  @Output() delItemEmitter = new EventEmitter<any>();

  delItem(value: any) {
    this.delItemEmitter.emit(value);
  }
}
