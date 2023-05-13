import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name1: string = 'Ironman';
  public age1: number =  45;

  get nameCapitalizate(){
    return this.name1.toLocaleUpperCase();
  }

  concatenate(): string {
    return `${this.name1}-${this.age1}`;
  }

  changeName() {
    this.name1='Batman';
  }

  changeAge() {
    this.age1 = 50;
  }

  reset () {
    this.age1=45;
    this.name1='Ironman';
  }

}
