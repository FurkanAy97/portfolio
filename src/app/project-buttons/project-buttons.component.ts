import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-buttons',
  templateUrl: './project-buttons.component.html',
  styleUrls: ['./project-buttons.component.scss']
})
export class ProjectButtonsComponent {
  @Input() githubLink: string | undefined;
  @Input() liveDemo: string | undefined;
}
