export class ProjectDescription {
  title: string;
  description: string;
  tags: string[];
  displayOnMain: boolean;
  // link github
  // priority / order
  constructor() {
    this.title = "Hotel Project";
    this.description = "This is a description of Hotel Project";
    this.tags = ["Angular", "MySQL", "Spring boot", "Laravel",];
  }

}
