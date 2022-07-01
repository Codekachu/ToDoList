import { Component, Input, OnInit } from '@angular/core';
import { ToDoItemsService } from '../services/to-do-items.service';

@Component({
  selector: 'app-single-item',
  templateUrl: './single-item.component.html',
  styleUrls: ['./single-item.component.scss']
})
export class SingleItemComponent implements OnInit {

  @Input() post:string = "";
  @Input() currentIndex:string = "";

  constructor(public items: ToDoItemsService) {
  }

  testremove(val:any){
    console.log(val);
  }

  ngOnInit(): void {
  }

}
