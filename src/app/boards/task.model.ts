export class Task {
  public titleTask: string;
  public idTask: string;
  public descriptionTask: string;
  public executor: string;
  public done: boolean;

  constructor (title: string, id: string, desc: string, executor: string, done: boolean) {
    this.titleTask = title;
    this.idTask = id;
    this.descriptionTask = desc;
    this.executor = executor;
    this.done = done;
  }
}
