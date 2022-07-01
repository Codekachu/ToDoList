import { Component, OnInit } from '@angular/core';
import { ToDoItemsService } from '../services/to-do-items.service';

@Component({
  selector: 'app-input-area',
  templateUrl: './input-area.component.html',
  styleUrls: ['./input-area.component.scss']
})
export class InputAreaComponent implements OnInit {

  item = "";

  constructor(public items: ToDoItemsService) {
  }

  ngOnInit(): void {
  }

}
