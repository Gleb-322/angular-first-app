import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'confirm-message',
  template: `
    <div>
      <div>Вы дейсвительно хотите удалить?</div>
      <button (click)="delYes(true)">Да</button>
      <button (click)="delNo(false)">Нет</button>
    </div>
  `,
})
export class ConfirmMessageComponent {
  @Output() confirmEmitter = new EventEmitter<boolean>();
  @Output() cancelEmitter = new EventEmitter<boolean>();

  delYes(value: any) {
    this.confirmEmitter.emit(value);
  }
  delNo(value: any) {
    this.cancelEmitter.emit(value);
  }
}
