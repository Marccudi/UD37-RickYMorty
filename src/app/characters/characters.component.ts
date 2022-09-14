import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CharactersService } from './characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters:any = null;
  characters2:any = null;

  constructor(private http: HttpClient, private charServ:CharactersService){}



  ngOnInit(){
    this.charServ.inicio()
    .subscribe(
      result => {
        this.characters=result;
        return this.characters;
      },
      error => {
        return null;
      }
    )
    this.characters=this.charServ.inicio();
    this.characters2=this.charServ.inicio();
  }


}
