import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogData } from '../add-new-board/add-new-board.component';

@Component({
  selector: 'app-add-new-board-dialog',
  templateUrl: './add-new-board-dialog.component.html',
  styleUrls: ['./add-new-board-dialog.component.css']
})
export class AddNewBoardDialogComponent {
  id!: number;
  editMode = this.data.edit;

  constructor(
    public dialogRef: MatDialogRef<AddNewBoardDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
