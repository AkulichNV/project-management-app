import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BoardService } from '../board.service';
import { Board } from './board.model';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css']
})
export class BoardsComponent implements OnInit, OnDestroy {
  boards?: Board[];
  private subscription!: Subscription;

  constructor(private boardService: BoardService) { }

  ngOnInit(): void {
    this.boards = this.boardService.getBoards();
    this.subscription = this.boardService.boardsChanged
      .subscribe(
        (boards: Board[]) => {
          this.boards = boards;
        }
      );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
