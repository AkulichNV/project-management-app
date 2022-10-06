import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Params } from '@angular/router';
import { BoardService } from 'src/app/board.service';
import { Project } from 'src/app/boards/project.model';
import { AddNewColumnDialogComponent } from '../add-new-column-dialog/add-new-column-dialog.component';

export interface DialogDataColumn {
  edit: boolean;
  title: string;
}

@Component({
  selector: 'app-add-new-column',
  templateUrl: './add-new-column.component.html',
  styleUrls: ['./add-new-column.component.css']
})
export class AddNewColumnComponent implements OnInit {
  id!: string;
  columnTitle!: string;

  constructor(public dialog: MatDialog,
    private route: ActivatedRoute,
    private boardService: BoardService) { }

  ngOnInit(): void {

    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
        }
      );
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddNewColumnDialogComponent, {
      width: '250px',
      data: {title: this.columnTitle, edit: false}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        const idProject = this.id + '-' + Date.now();
        const newProject = new Project(result.title, idProject, []);
        this.boardService.addColumn(this.id, newProject);
      }
    });
  }

}
