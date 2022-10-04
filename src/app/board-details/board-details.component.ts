import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BoardService } from '../board.service';
import { Board } from '../boards/board.model';

@Component({
  selector: 'app-board-details',
  templateUrl: './board-details.component.html',
  styleUrls: ['./board-details.component.css']
})
export class BoardDetailsComponent implements OnInit {
  board?: Board;
  id!: string;

  constructor(private boardService: BoardService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    // console.log(this.id);
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.board = this.boardService.getBoard(this.id);
        }
      );
    // console.log(this.id);
  }


}
