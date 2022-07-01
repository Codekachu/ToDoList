import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToDoItemsService {

  items = ['Item 1','Item 2','Item 3'];

  addItemToList(item:string){
      this.items.push(item);
  }
  removeItemFromList(itemIndex:any){
    let userChoice = confirm("Wirklich löschen?");
    if(userChoice){
      this.items.splice(itemIndex,1);
    }
  }
  constructor() { }
}
