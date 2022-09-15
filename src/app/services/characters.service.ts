import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Characters } from '../models/Characters.model';

const baseUrl = 'https://ud41-rick-y-morty.herokuapp.com/Characters';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) {}

    getAll(): Observable<Characters[]> {
      return this.http.get<Characters[]>(baseUrl)
    }

    get(id:any):Observable<Characters>{
      return this.http.get(`${baseUrl}/${id}`);
    }

    create(data:any):Observable<any>{
      return this.http.post(baseUrl, data);
    }

    update(id:any, data:any):Observable<any>{
      return this.http.put(`${baseUrl}/${id}`, data);
    }

    delete(id:any):Observable<any>{
      return this.http.delete(`${baseUrl}/${id}`);
    }

    deleteAll():Observable<any>{
      return this.http.delete(baseUrl);
    }

    findByName(name:any): Observable<Characters[]>{
      return this.http.get<Characters[]>(`${baseUrl}?name=${name}`);
    }


}

