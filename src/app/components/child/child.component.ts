import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'child-comp',
  template: `
    <div>
      <h2>Дочерний комопнент</h2>
      <p>Текущий текст: {{ currentText }}</p>
      <p>Текущая цена: {{ currentPrice }}</p>
      <div>
        <h3>Количество кликов: {{ clickCount }}</h3>
        <button (click)="change(true)">+</button>
        <button (click)="change(false)">-</button>
      </div>
    </div>
  `,
  styles: [
    `
      h2,
      p {
        color: red;
      }
    `,
  ],
})
export class ChildComponent {
  @Input() currentText: string = '';
  @Input() currentPrice: number = 0;
  @Input() clickCount: number = 0;

  @Output() changeMethod = new EventEmitter<boolean>();

  change(inc: any) {
    this.changeMethod.emit(inc);
  }
}
