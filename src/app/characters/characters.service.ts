import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) { }
  characters:any = null;

  inicio(){
     return this.http.get('https://rickandmortyapi.com/api/character/'+this.random(1,183)+','+this.random(1,183)+','+this.random(1,183)+','+this.random(1,183)+','+this.random(1,183)+','+this.random(1,183)+','+this.random(1,183)+','+this.random(1,183))

  }

  random(min:number,max:number){
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

}
