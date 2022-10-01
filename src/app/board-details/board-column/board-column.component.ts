import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/boards/project.model';

@Component({
  selector: 'app-board-column',
  templateUrl: './board-column.component.html',
  styleUrls: ['./board-column.component.css']
})
export class BoardColumnComponent implements OnInit {
  @Input() col!: Project;

  constructor() { }

  ngOnInit(): void {
   console.log(this.col);
  }

}
