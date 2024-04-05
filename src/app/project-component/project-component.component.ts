import { Component, HostListener } from '@angular/core';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-project-component',
  templateUrl: './project-component.component.html',
  styleUrls: ['./project-component.component.scss'],
})
export class ProjectComponentComponent extends HomeComponent {
  projectImages: Array<string> = [
    'assets/img/join.png',
    'assets/img/sharkie.png',
    'assets/img/Simple-CRM.png',
  ];
  projectTitle: Array<string> = ['Join', 'Sharkie', 'Simple CRM'];
  projectStack: Array<string> = [
    'JavaScript | HTML | CSS',
    'JavaScript | HTML | CSS',
    'Angular | Firebase',
  ];
  projectDescription: Array<string> = [
    'Ein Task manager inspiriert vom Kanban-System. Erstellen und organisieren Sie Aufgaben mithilfe von Drag-and-Drop-Funktionen und weisen Sie Benutzer und Kategorien zu.',
    'Ein einfaches Jump-and-Run-Spiel basierend auf einem objektorientierten Ansatz. Helfen Sie Sharkie, Münzen und Giftflaschen zu finden, um gegen den Killerwal zu kämpfen.',
    'Ein simples Kundenbeziehungsmanagement-System, das mit CRUD-Funktionalität funktioniert.',
  ];
  grandParentGithubLink: Array<string> = [
    'https://github.com/FurkanAy97/JOIN-Project',
    'https://github.com/FurkanAy97/Sharky',
    'https://github.com/FurkanAy97/simple-crm'
  ]

  grandParentLiveDemo: Array<string> = [
    'http://join.furkan-ayhan.de/',
    'http://sharkie.furkan-ayhan.de/',
    'http://simple-crm.furkan-ayhan.de/#/'
  ]

}
