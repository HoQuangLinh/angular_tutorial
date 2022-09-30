import { Component, OnInit } from '@angular/core';
import { Hero } from '../interface/Hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor() {}
  public name = '';
  public email = '';
  heroes: Hero[] = [];
  myColor: string = 'blue';
  ngOnInit(): void {
    this.getHeroes();
  }

  //Handle Submit form
  submitForm(): void {
    console.log(`Handle submit form ${this.name} ${this.email}`);
  }
  getHeroes(): void {
    this.heroes = [
      { id: 1, name: 'Linh' },
      { id: 2, name: 'Hao' },
      { id: 3, name: 'Vy' },
      { id: 4, name: 'Ngan' },
    ];
    console.log(this.heroes);
  }
}
