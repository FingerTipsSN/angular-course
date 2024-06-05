import { Component, OnInit } from '@angular/core';
import { DataService } from '../heroes-api.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getHeroes().subscribe(data => {
      this.heroes = data;
    });
  }
}
