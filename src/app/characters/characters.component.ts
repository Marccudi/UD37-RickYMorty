import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/services/characters.service';
import { Characters } from '../models/Characters.model';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent implements OnInit {
  characters?: Characters[];
  currentCharacter: Characters = {};
  currentIndex = -1;
  name = '';

  constructor(private charService: CharactersService) {}

  ngOnInit(): void {
    this.retrieveCharacters();
  }

  retrieveCharacters(): void {
    this.charService.getAll().subscribe(
      (data) => {
        this.characters = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  refreshList(): void {
    this.retrieveCharacters();
    this.currentCharacter={};
    this.currentIndex=-1;
  }

  setActiveChar(char:Characters, index:number):void {
    this.currentCharacter=char;
    this.currentIndex=index;
  }

  removeAllChar():void {
    this.charService.deleteAll()
    .subscribe(
      response => {
        console.log(response);
        this.refreshList();

      },
      error => {
        console.log(error);
      });
  }

  searchName():void {
    this.currentCharacter ={}
    this.currentIndex =-1

    this.charService.findByName(this.name)
    .subscribe(
      data => {
        console.log(data);
        this.characters=data;

      },
      error => {
        console.log(error);
      });
  }

}
