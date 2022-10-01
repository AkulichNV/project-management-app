import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/boards/task.model';

@Component({
  selector: 'app-board-task',
  templateUrl: './board-task.component.html',
  styleUrls: ['./board-task.component.css']
})
export class BoardTaskComponent implements OnInit {
  @Input() task!: Task;

  constructor() { }

  ngOnInit(): void {
  }

}
