import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { BoardService } from 'src/app/board.service';
import { Board } from 'src/app/boards/board.model';
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
  board?: Board;
  id!: string;
  private subscription!: Subscription;
  columnTitle!: string;

  constructor(public dialog: MatDialog,
    private route: ActivatedRoute,
    private boardService: BoardService) { }

  ngOnInit(): void {

    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.board = this.boardService.getBoard(this.id);
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
        console.log(this.id);
          const idProject = this.id + '-' + this.board?.project?.length;
          const newProject = new Project(result.title, idProject, []);
          console.log(newProject);
          this.boardService.addColumn(this.id, newProject);

      }
    });
  }

}
