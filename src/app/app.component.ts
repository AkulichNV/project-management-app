import { Component, OnInit } from '@angular/core';

import { BoardService } from './board.service';
import { Board } from './boards/board.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BoardService]
})
export class AppComponent implements OnInit {
  selectedBoard!: Board;
  title = 'project-management-app';
  loadedFeature = 'home';

  constructor(private boardService: BoardService) { }

  ngOnInit() {
    this.boardService.boardSelected
      .subscribe(
        (board: Board) => {
          this.selectedBoard = board;
        }
      )
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
