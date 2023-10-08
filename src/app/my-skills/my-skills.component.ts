import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss']
})
export class MySkillsComponent extends HomeComponent {

  skills:Array<string> = ['angular', 'ts', 'js', 'html', 'firebase', 'git', 'css', 'api', 'scrum', 'material-design']
  skillNames:Array<string> = ['Angular', 'Typescript', 'Javascript', 'HTML', 'Firebase', 'GIT', 'CSS', 'Rest-Api', 'Scrum', 'Material design']
}
