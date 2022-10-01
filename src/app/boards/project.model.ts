import { Task } from "./task.model";

export class Project {
  public titleProject: string;
  public idProject: string;
  public task: Task[];


  constructor (title: string, id: string, task: Task[]) {
    this.titleProject = title;
    this.idProject = id;
    this.task = task;
  }
}
