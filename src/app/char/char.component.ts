import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Characters } from '../models/Characters.model';
import { CharactersService } from '../services/characters.service';

@Component({
  selector: 'app-char',
  templateUrl: './char.component.html',
  styleUrls: ['./char.component.css']
})
export class CharComponent implements OnInit {

    id:string|null="";
    character:any = null;
    baseUrl = 'http://localhost:3000/Characters';
    currentChar:Characters={
      id: 0,
      name: '',
      status: '',
      species: '',
      gender: '',
      origin: '',
      image: ''
    }


  constructor( private route:ActivatedRoute, private http: HttpClient, private charServ:CharactersService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.http.get(`${this.baseUrl}/${this.id}`)
      .subscribe(
        result => {
          this.character = result;
        },
        error => {
          console.log('problemas');
        }
      )
  }
  delChar(){
    this.id = this.route.snapshot.paramMap.get('id');
    this.charServ.delete(this.id)
    .subscribe(
      response => {
        this.character = response;
      },
      error => {
        console.log(error);
      }
    )

  }
  editChar(){
    this.id = this.route.snapshot.paramMap.get('id');

  }


}
