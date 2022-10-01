import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { BoardService } from 'src/app/board.service';
import { AddNewBoardDialogComponent } from '../add-new-board-dialog/add-new-board-dialog.component';
import { Board } from '../board.model';

@Component({
  selector: 'app-board-card',
  templateUrl: './board-card.component.html',
  styleUrls: ['./board-card.component.css']
})
export class BoardCardComponent implements OnInit, OnDestroy {
  @Input() board: Board | undefined;
  @Input() id!: string;
  private subscription!: Subscription;

  constructor(public dialog: MatDialog,
    private boardService: BoardService) { }

  ngOnInit(): void {
    this.board = this.boardService.getBoard(this.id);
      this.subscription = this.boardService.boardChanged
      .subscribe(
        (board: Board) => {
          this.board = board;
        }
      );
  }

  onDelete() {
    this.boardService.deleteBoard(this.id);
  }

  onEditItem() {
    const dialogRef = this.dialog.open(AddNewBoardDialogComponent, {
      width: '250px',
      data: {title: this.board!.titleBoard, description: this.board!.descriptionBoard, edit: true}
    });

    dialogRef.afterClosed().subscribe(result => {
      const newBoard = new Board(result.title, this.board!.idBoard, result.description, this.board!.imagePath, this.board!.project!);
      this.boardService.updateBoard(this.id, newBoard);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
