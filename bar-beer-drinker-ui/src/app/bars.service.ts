import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
export interface Bar{
  name: string;
  state: string;
}
export interface Beer{
  name: string;
  manf: string;
}
export interface Item{
  itemName: string;
  price: number;
}
export interface TopDrinker{
  name: string;
  spending: number;
}
export interface Drinker{
  name: string;
  state: string;
}
export interface BarMenuItem{
  beer: string;
  manf: string;
  price: string;
}
export interface Receipt{
  drinker: string;
  ID: number;
  bar: string;
  day: string;
  time: string;
  subtotal: number;
  tip: number;
}

@Injectable({
  providedIn: 'root'
})

export class BarsService {

  constructor(
    public http: HttpClient
  ) { }
  getBars(){
    return this.http.get<Bar[]>('/api/bar');
  }
  getBar(bar:string){
    return this.http.get<Bar>('/api/bar/'+ bar);
  }
  getBeers(){
    return this.http.get<Beer[]>('/api/beers');
  }
  getDrinkers(){
    return this.http.get<Drinker[]>('/api/drinker')
  }
  getMenu(bar:string){
    return this.http.get<BarMenuItem[]>('api/menu/'+ bar);
  }
  getReceipt(drinker:string){
    return this.http.get<Receipt[]>('api/receipts/'+drinker)
  }
  getItems(bar:string, id:string){
    return this.http.get<Item[]>('api/items/'+bar + '/'+id)
  }
  getTopDrinkers(bar:string){
    return this.http.get<TopDrinker[]>('api/topDrinkers/'+bar)
  }

}

