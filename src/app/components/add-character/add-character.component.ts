import { Component, OnInit } from '@angular/core';
import { Characters } from 'src/app/models/Characters.model';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent implements OnInit {

  characters: Characters = {
    name: '',
    status: '',
    species: '',
    gender: '',
    origin: '',
    image: ''
  };
  submitted = false;

  constructor( private characterService:CharactersService) { }

  ngOnInit(): void {
  }

  saveCharacter() : void{
    const data = {
      name: this.characters.name,
      status: this.characters.status,
      species: this.characters.species,
      gender: this.characters.gender,
      origin: this.characters.origin,
      image: this.characters.image
    };


    this.characterService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newCharacter(): void{
    this.submitted = false;
    this.characters ={
      id: 0,
      name: '',
      status: '',
      species: '',
      gender: '',
      origin: '',
      image: ''
    }
  }

}
