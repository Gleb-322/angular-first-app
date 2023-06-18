import { Component } from '@angular/core';

export class Items {
  purchase: string;
  done: boolean;
  price: number;

  constructor(text: string, price: number) {
    this.purchase = text;
    this.price = price;
    this.done = false;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  text: string = '';
  price: number = 0;

  clicks: number = 0;

  confirmMessage: boolean = false;
  sayYes: boolean = false;

  purchase: string = '';

  items: Items[] = [
    { purchase: 'Хлеб', done: false, price: 15.9 },
    { purchase: 'Масло', done: false, price: 60 },
    { purchase: 'Картофель', done: true, price: 22.6 },
    { purchase: 'Сыр', done: false, price: 310 },
  ];

  addItem(text: string, price: number): void {
    if (text.trim() == '' || text == null || price == null) {
      return;
    }
    this.items.push(new Items(text, price));
  }

  onChanged(inc: any) {
    inc == true ? this.clicks++ : this.clicks--;
  }

  showConfirmMes(value: any) {
    this.confirmMessage = false;
    this.sayYes = value;
    console.log(this.sayYes);
    if (this.sayYes) {
      this.items.filter((item) => item.purchase !== this.purchase);
    }
    console.log(this.items);
  }

  onDelItem(value: any) {
    this.confirmMessage = value.confirm;
    this.purchase = value.purchase;
    console.log(this.confirmMessage);
    console.log(this.purchase);
  }
}
