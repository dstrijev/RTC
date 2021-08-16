import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../project.model';

@Component({
  selector: 'app-project-checklist',
  templateUrl: './project-checklist.component.html',
  styleUrls: ['./project-checklist.component.css']
})
export class ProjectChecklistComponent implements OnInit {
  @Input() project: Project;

  constructor() { }

  ngOnInit(): void {
  }

}
