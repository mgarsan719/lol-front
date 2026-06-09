import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Character } from '../model/character';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {

  private _baseUrl: string = "http://localhost:8080/api";

  constructor(
    private _http: HttpClient
  ){};

  public getMultipleRoleCharacter(): Observable<Character[]>{
    //localhost:8080/api/character/filter/multiplerole
    return this._http.get<Character[]>(this._baseUrl + "/characters/filter/multiplerole");
  }

  public getCharacters(): Observable<Character[]> {
    return this._http.get<Character[]>(this._baseUrl + "/characters");
  }

  public getTanks(): Observable<Character[]>{
    return this._http.get<Character[]>(this._baseUrl + "/characters/filter/tanks");
  }
  
}
