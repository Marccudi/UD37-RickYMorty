import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters:any = null;
  characters2:any = null;
  constructor(private http: HttpClient){}

  ngOnInit(){

    this.http.get('https://rickandmortyapi.com/api/character/'+this.random(1,183)+','+this.random(1,183)+','+this.random(1,183)+','+this.random(1,183))
      .subscribe(
        result => {
          this.characters = result;
        },
        error => {
          console.log('problemas');
        }
      )

      this.http.get('https://rickandmortyapi.com/api/character/'+this.random(1,183)+','+this.random(1,183)+','+this.random(1,183)+','+this.random(1,183))
      .subscribe(
        result => {
          this.characters2 = result;
        },
        error => {
          console.log('problemas');
        }
      )
  }

  random(min:number,max:number){
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
}
