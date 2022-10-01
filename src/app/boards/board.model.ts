import { Project } from "./project.model";

export class Board {
  public titleBoard: string;
  public idBoard: string;
  public descriptionBoard: string;
  public imagePath: string;
  public project?: Project[];

  constructor (title: string, id: string, desc: string, imagePath: string, project: Project[]) {
    this.titleBoard = title;
    this.idBoard = id;
    this.descriptionBoard = desc;
    this.imagePath = imagePath;
    this.project = project;
  }
}
