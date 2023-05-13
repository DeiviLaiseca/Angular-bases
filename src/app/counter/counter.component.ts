import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

  public counter: number = 0;

  counterValue(valor: number):void {
    this.counter += valor;
  }

  resetValue():void {
    this.counter = 0;
  }

}
