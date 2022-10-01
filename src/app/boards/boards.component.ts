import { Component, OnInit } from '@angular/core';
import { BoardService } from '../board.service';
import { Board } from './board.model';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css']
})
export class BoardsComponent implements OnInit {
  boards?: Board[];

  constructor(private boardService: BoardService) { }

  ngOnInit(): void {
    this.boards = this.boardService.getBoards();
  }

}
