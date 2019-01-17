import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {TopDrinker, BarsService} from '../bars.service';
import { HttpResponse } from '@angular/common/http';
@Component({
  selector: 'app-bar-details',
  templateUrl: './bar-details.component.html',
  styleUrls: ['./bar-details.component.css']
})
export class BarDetailsComponent implements OnInit {
  topdrinkers: TopDrinker[];
  bar: string;
  drinkerChart: any;
  constructor(
    private barService: BarsService,
    private route: ActivatedRoute
  ) {route.paramMap.subscribe((paramMap) => {
    this.bar = paramMap.get('bar');
    barService.getTopDrinkers(this.bar).subscribe(
      data => {
        this.topdrinkers = data;
      },
      (error: HttpResponse<any>) =>{
        if(error.status === 404){
          alert('Items not found');
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
