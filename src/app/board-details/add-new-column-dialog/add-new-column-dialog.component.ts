import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogDataColumn } from '../add-new-column/add-new-column.component';

@Component({
  selector: 'app-add-new-column-dialog',
  templateUrl: './add-new-column-dialog.component.html',
  styleUrls: ['./add-new-column-dialog.component.css']
})
export class AddNewColumnDialogComponent{
  id!: number;
  editMode = this.data.edit;

  constructor(
    public dialogRef: MatDialogRef<AddNewColumnDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogDataColumn) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
