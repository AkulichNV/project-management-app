import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BoardService } from 'src/app/board.service';
import { Board } from '../board.model';

@Component({
  selector: 'app-board-card',
  templateUrl: './board-card.component.html',
  styleUrls: ['./board-card.component.css']
})
export class BoardCardComponent implements OnInit {
  @Input() board!: Board;
  @Input() id!: string;

  constructor(private boardService: BoardService) { }

  ngOnInit(): void {
    // console.log(this.board);
  }

}
