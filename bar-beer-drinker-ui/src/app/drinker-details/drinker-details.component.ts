import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Drinker, BarsService, BarMenuItem, Receipt} from '../bars.service';
import { HttpResponse } from '@angular/common/http';
@Component({
  selector: 'app-drinker-details',
  templateUrl: './drinker-details.component.html',
  styleUrls: ['./drinker-details.component.css']
})
export class DrinkerDetailsComponent implements OnInit {
  receipt: Receipt[];
  drinkerDetails: Drinker;
  drinker: string;
  constructor(
    private route: ActivatedRoute,
    private barService: BarsService
  ) {
    route.paramMap.subscribe((paramMap) => {
      this.drinker = paramMap.get('drinker');
      barService.getReceipt(this.drinker).subscribe(
        data => {
          this.receipt = data;
        },
        (error: HttpResponse<any>) =>{
          if(error.status === 404){
            alert('Drinker not found');
          }
          else{
            console.error(error.status + ' - ' + error.body);
            alert('An error occurred on the server. Please check the console.');
          }
        }
    );
  });

}

  ngOnInit() {
  }

}
