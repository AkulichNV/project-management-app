import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Params } from '@angular/router';
import { BoardService } from 'src/app/board.service';
import { Board } from 'src/app/boards/board.model';
import { Project } from 'src/app/boards/project.model';
import { Task } from 'src/app/boards/task.model';
import { AddNewTaskDialogComponent } from '../add-new-task-dialog/add-new-task-dialog.component';

export interface DialogDataTask {
  edit: boolean;
  title: string;
  description: string;
  executor: string;
}

@Component({
  selector: 'app-add-new-task',
  templateUrl: './add-new-task.component.html',
  styleUrls: ['./add-new-task.component.css']
})
export class AddNewTaskComponent implements OnInit {
  board?: Board;
  @Input() project!: Project;
  id!: string;
  taskTitle!: string;
  taskDescription!: string;
  taskExecutor!: string;

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
    const dialogRef = this.dialog.open(AddNewTaskDialogComponent, {
      width: '250px',
      data: {title: this.taskTitle, description: this.taskDescription, executor: this.taskExecutor, edit: false}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        const idTask = this.project?.idProject + '-' + Date.now();
        const newTask = new Task(result.title, idTask, result.description, result.executor, false);
        this.boardService.addTask(this.id, this.project?.idProject, newTask);
      }
    });
  }

}
