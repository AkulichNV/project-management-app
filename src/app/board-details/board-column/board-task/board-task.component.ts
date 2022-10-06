import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Params } from '@angular/router';
import { BoardService } from 'src/app/board.service';
import { Project } from 'src/app/boards/project.model';
import { Task } from 'src/app/boards/task.model';
import { AddNewTaskDialogComponent } from '../add-new-task-dialog/add-new-task-dialog.component';

@Component({
  selector: 'app-board-task',
  templateUrl: './board-task.component.html',
  styleUrls: ['./board-task.component.css']
})
export class BoardTaskComponent implements OnInit {
  @Input() task!: Task;
  @Input() project!: Project;
  id!: string;

  constructor(public dialog: MatDialog,
    private boardService: BoardService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
        }
      );
  }

  onEditItem() {
    const dialogRef = this.dialog.open(AddNewTaskDialogComponent, {
      width: '250px',
      data: {title: this.task!.titleTask,
            description: this.task!.descriptionTask,
            executor: this.task!.executor,
            edit: true}
    });

    dialogRef.afterClosed().subscribe(result => {
      const newTask = new Task(result.title, this.task!.idTask, result.description, result.executor, false);
      this.boardService.updateTask(this.id, this.project.idProject, this.task!.idTask, newTask);
    });

  }

  onDelete() {
    this.boardService.deleteTask(this.id, this.project.idProject, this.task.idTask);
  }
}
