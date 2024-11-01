import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }];

  @Output()
  // public onDelete: EventEmitter<number> = new EventEmitter(); //Index value: number
  public onDelete: EventEmitter<string> = new EventEmitter(); //Id value: string

  // deleteCharacter(index: number): void{
  //   this.onDelete.emit(index);
  // }

  deleteCharacter(id: string): void{
    console.log({id});
    this.onDelete.emit(id);
  }
}
