import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddNewBoardDialogComponent } from '../add-new-board-dialog/add-new-board-dialog.component';

export interface DialogData {
  title: string;
  description: string;
}

@Component({
  selector: 'app-add-new-board',
  templateUrl: './add-new-board.component.html',
  styleUrls: ['./add-new-board.component.css']
})
export class AddNewBoardComponent {

  boardTitle!: string;
  boardDescription!: string;

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddNewBoardDialogComponent, {
      width: '250px',
      data: {title: this.boardTitle, description: this.boardDescription}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.boardDescription = result;
      console.log('The dialog was closed', result);
    });
  }


}
