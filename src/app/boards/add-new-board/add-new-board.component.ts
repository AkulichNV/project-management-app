import { Component, OnInit, OnDestroy } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { BoardService } from 'src/app/board.service';
import { AddNewBoardDialogComponent } from '../add-new-board-dialog/add-new-board-dialog.component';
import { Board } from '../board.model';

export interface DialogData {
  title: string;
  description: string;
}

@Component({
  selector: 'app-add-new-board',
  templateUrl: './add-new-board.component.html',
  styleUrls: ['./add-new-board.component.css']
})
export class AddNewBoardComponent implements OnInit, OnDestroy {
  boards?: Board[];
  private subscription!: Subscription;
  editMode = false;
  editedItemIndex!: number;
  boardTitle!: string;
  boardDescription!: string;

  constructor(public dialog: MatDialog,
    private boardService: BoardService) { }

  ngOnInit(): void {
      this.boards = this.boardService.getBoards();
      this.subscription = this.boardService.boardsChanged
      .subscribe(
        (boards: Board[]) => {
          this.boards = boards;
        }
      );
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddNewBoardDialogComponent, {
      width: '250px',
      data: {title: this.boardTitle, description: this.boardDescription}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        if (this.editMode) {
          this.boardDescription = result.description;
          this.boardTitle = result.title;
          // this.boardService.updateBoard(this.editedItemIndex, newBoard);
        } else {
          const idBoard = this.boards!.length.toString();
          const num = Math.floor(Math.random() * 13);
          const img = `/assets/backgrounds/${num}.jpg`
          const newBoard = new Board(result.title, idBoard, result.description, img, []);
          this.boardService.addBoard(newBoard);
        }
        this.editMode = false;
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
