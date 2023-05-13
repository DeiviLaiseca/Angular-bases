import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public listHeros: string[] = ['Goku','Vegeta','Gohan','Trunks','Gotenks']

  public deleteHero?: string;

  deleteLastHero(){
    this.deleteHero = this.listHeros.pop();
  }
}
