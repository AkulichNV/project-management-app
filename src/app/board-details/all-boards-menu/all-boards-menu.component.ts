import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Board } from 'src/app/boards/board.model';

@Component({
  selector: 'app-all-boards-menu',
  templateUrl: './all-boards-menu.component.html',
  styleUrls: ['./all-boards-menu.component.css']
})
export class AllBoardsMenuComponent implements OnInit {
  @Input() boardM!: any;
  // @Output() allBoard = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
    console.log(this.boardM);
  }

}
