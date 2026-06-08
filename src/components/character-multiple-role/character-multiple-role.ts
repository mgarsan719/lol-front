import { Component } from '@angular/core';
import { Character } from '../../model/character';
import { CharacterService } from '../../services/character-service';

@Component({
  selector: 'app-character-multiple-role',
  imports: [],
  templateUrl: './character-multiple-role.html',
  styleUrl: './character-multiple-role.css',
})
export class CharacterMultipleRole {
  public characters: Character[] = [];

  constructor(private _CharacterService: CharacterService){}

  ngOnInit(): void {
    this._CharacterService.getMultipleRoleCharacter().subscribe(data => {
      this.characters = data;
    })
  }
}
