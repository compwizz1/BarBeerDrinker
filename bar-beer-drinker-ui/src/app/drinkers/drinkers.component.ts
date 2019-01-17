import { Component, OnInit } from '@angular/core';
import { Drinker, BarsService } from '../bars.service';
@Component({
  selector: 'app-drinkers',
  templateUrl: './drinkers.component.html',
  styleUrls: ['./drinkers.component.css']
})
export class DrinkersComponent implements OnInit {
  drinkers: Drinker[];
  constructor(
    private barService: BarsService
  ) { }

  ngOnInit() {
    this.getDrinkers();
  }
  getDrinkers(){
    this.barService.getDrinkers().subscribe(
      data =>{
        this.drinkers = data;
      },
      error=>{
        alert('Could not retrive list of drinkers');
      }
    );
  }
}
