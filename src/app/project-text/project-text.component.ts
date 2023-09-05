import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-text',
  templateUrl: './project-text.component.html',
  styleUrls: ['./project-text.component.scss'],
})
export class ProjectTextComponent {
  @Input() projectTitle: string | undefined;
  @Input() projectStack: string | undefined;
  @Input() projectDescription: string | undefined;
}
