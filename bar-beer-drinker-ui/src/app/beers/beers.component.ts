import { Component, OnInit } from '@angular/core';
import { BarsService, Beer} from '../bars.service';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.css']
})
export class BeersComponent implements OnInit {
  beers: Beer[];
  constructor(
    private barService: BarsService
  ) { }

  ngOnInit() {
    this.getBeers();
  }
  getBeers(){
    this.barService.getBeers().subscribe(
      data =>{
        this.beers = data;
      },
      error=>{
        alert('Could not retrive list of beers');
      }
    );
  }
}
