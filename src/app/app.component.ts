import { Component } from '@angular/core';
import { ToDoItemsService } from './services/to-do-items.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor(public Allitems: ToDoItemsService){
  }
}
