import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  }, {
    id: uuid(),
    name: 'Goku',
    power: 9500
  }, {
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  }];

  addCharacter(myCharacter: Character): void{
    const newCharacter: Character = {
      id: uuid(),
      ...myCharacter
    }

    this.characters.push(newCharacter);
  }

  // onDeleteMain(index: number) {
  //   this.characters.splice(index, 1)
  // }
  deleteCharacterById(myId: string) {
    this.characters = this.characters.filter(x => x.id !== myId);
  }
}
