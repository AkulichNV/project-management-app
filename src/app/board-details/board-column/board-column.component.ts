import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BoardService } from 'src/app/board.service';
import { Project } from 'src/app/boards/project.model';
import { AddNewColumnDialogComponent } from '../add-new-column-dialog/add-new-column-dialog.component';

@Component({
  selector: 'app-board-column',
  templateUrl: './board-column.component.html',
  styleUrls: ['./board-column.component.css']
})
export class BoardColumnComponent implements OnInit {
  @Input() col!: Project;

  constructor(public dialog: MatDialog,
    private boardService: BoardService) { }

  ngOnInit(): void {
  //  console.log(this.col);
  }

  onEditItem() {
    const dialogRef = this.dialog.open(AddNewColumnDialogComponent, {
      width: '250px',
      data: {title: this.col!.titleProject, edit: true}
    });

    dialogRef.afterClosed().subscribe(result => {
      const newProject = new Project(result.title, this.col!.idProject, this.col!.task!);
      this.boardService.updateColumn(this.col!.idProject, newProject);
    });
  }

  onDelete() {
    this.boardService.deleteColumn(this.col.idProject);
  }

}
