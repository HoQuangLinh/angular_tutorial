import { Component, OnInit } from '@angular/core';
import { Hero } from '../interface/Hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  constructor() {}
  heroes: Hero[] = [];
  ngOnInit(): void {
    this.getHeroes();
  }
  getHeroes(): void {
    this.heroes = [
      { id: 1, name: 'Linh' },
      { id: 2, name: 'Hao' },
    ];
  }
}
