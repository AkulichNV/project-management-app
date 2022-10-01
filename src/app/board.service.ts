import { EventEmitter, Injectable } from "@angular/core";
import { Board } from "./boards/board.model";
import { Project } from "./boards/project.model";
import { Task } from "./boards/task.model";

@Injectable()
export class BoardService {
  boardSelected = new EventEmitter<Board>();

  private boards: Board[] = [
    new Board(
      'Board Title 1',
      '0',
      'Amazing Description',
      'https://t3.ftcdn.net/jpg/03/06/95/48/240_F_306954818_uw4GyIgq1CMg9JCAslYOQUcpzdm2fugQ.jpg',
      [
        new Project(
          'Project 11',
          '0-0',
          [
            new Task(
              'Task 111',
              '0-0-0',
              'Something amazing work',
              'alia',
              false
            ),
            new Task(
              'Task 112',
              '0-0-1',
              'Something description work',
              'maha',
              false
            )
          ]
        ),
        new Project(
          'Project12',
          '0-1',
          [
            new Task(
              'Task121',
              '0-1-0',
              'Something amazing work',
              'aurora',
              false
            ),
            new Task(
              'Task122',
              '0-1-1',
              'Something description work',
              'adrian',
              false
            ),
            new Task(
              'Task123',
              '0-1-2',
              'Something amazing work',
              'tanya',
              false
            )
          ]
        ),
        new Project(
          'Project13',
          '0-2',
          [
            new Task(
              'Task131',
              '0-2-0',
              'Something amazing work',
              'tanya',
              false
            )
          ]
        ),
        new Project(
          'Project14',
          '0-3',
          [
            new Task(
              'Task141',
              '0-3-0',
              'Something amazing work',
              'Nataha',
              false
            )
          ]
        )
      ]

    ),
    new Board(
      'Board Title 2 very long name bla-bla-bla project',
      '1',
      'Something so looooong there is writing',
      'https://media.istockphoto.com/vectors/cosmos-background-with-realistic-stardust-nebula-and-shining-stars-vector-id1212806840?k=20&m=1212806840&s=170667a&w=0&h=u8xlKrrYg820u91GZIPX7uTMA7CVDFdwBYFXi38JJS4=',
      [
        new Project(
          'Project21',
          '1-0',
          [
            new Task(
              'Task211',
              '1-0-0',
              'Something amazing work',
              'sasha',
              false
            ),
            new Task(
              'Task212',
              '1-0-1',
              'Something like that pipi',
              'kate',
              false
            ),
          ]
        )
      ]
    )
  ];

  getBoards() {
    return this.boards.slice();
  }

  getBoard(id: string) {
    const b = this.boards.find(el => el.idBoard === id);
    console.log(b);
    return b;
  }
}
