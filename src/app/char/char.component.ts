import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-char',
  templateUrl: './char.component.html',
  styleUrls: ['./char.component.css']
})
export class CharComponent implements OnInit {

    id:string|null="";
    character:any = null;

  constructor( private route:ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.http.get('https://rickandmortyapi.com/api/character/'+this.id)
      .subscribe(
        result => {
          this.character = result;
        },
        error => {
          console.log('problemas');
        }
      )
  }

}
