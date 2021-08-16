import { Component, EventEmitter, OnInit, Output } from '@angular/core';

//model import
import { Project } from '../project.model';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  @Output() projectWasSelected = new EventEmitter<Project>();

  //properties
  projects: Project[] = [
      new Project('Test Project', 'Alpha', 'This is just a test project', ['Dima', 'Yossi'], 'SW', 52,'internal', 'TBD', 'TBD'),
      new Project('Test Project 2', 'Beta', 'This is just another test project', ['Greg'])
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onProjectSelected(project: Project){
    this.projectWasSelected.emit(project);
  }
}
