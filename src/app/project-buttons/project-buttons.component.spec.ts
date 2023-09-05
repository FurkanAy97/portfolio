import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectButtonsComponent } from './project-buttons.component';

describe('ProjectButtonsComponent', () => {
  let component: ProjectButtonsComponent;
  let fixture: ComponentFixture<ProjectButtonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectButtonsComponent]
    });
    fixture = TestBed.createComponent(ProjectButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
