import { Component, OnInit } from '@angular/core';
import { DataService } from '../heroes-api.service';

@Component({
  selector: 'app-powers',
  templateUrl: './powers.component.html',
  styleUrls: ['./powers.component.css']
})
export class PowersComponent implements OnInit {
  powers: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getPowers().subscribe(data => {
      this.powers = data;
    });
  }
}