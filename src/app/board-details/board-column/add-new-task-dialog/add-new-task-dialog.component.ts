import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogDataTask } from '../add-new-task/add-new-task.component';

@Component({
  selector: 'app-add-new-task-dialog',
  templateUrl: './add-new-task-dialog.component.html',
  styleUrls: ['./add-new-task-dialog.component.css']
})
export class AddNewTaskDialogComponent {
  editMode = this.data.edit;

  constructor(
    public dialogRef: MatDialogRef<AddNewTaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogDataTask) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
