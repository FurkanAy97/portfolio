import { Component } from '@angular/core';

@Component({
  selector: 'app-project-component',
  templateUrl: './project-component.component.html',
  styleUrls: ['./project-component.component.scss'],
})
export class ProjectComponentComponent {
  projectImages: Array<string> = [
    'assets/img/join.png',
    'assets/img/sharkie.png',
    'assets/img/Simple-CRM.png',
  ];
  projectTitle: Array<string> = ['Join', 'Sharkie','Simple CRM' ];
  projectStack: Array<string> = ['Angular | TypeScript | HTML | CSS | Firebase ', 'JavaScript | HTML | CSS', 'Angular | Firebase']
  projectDescription: Array<string> = [
    'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
    'A simple Jump-and-Run game based on an object-oriented approach. Help sharkie to find coins and poison bottles to fight against the killer whale.',
    'A very Simple Customer Relationship Management system working with CRUD functionality.'
  ];
}
