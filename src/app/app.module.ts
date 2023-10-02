import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { SocialLinksComponent } from './social-links/social-links.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { PortfolioHeaderComponent } from './portfolio-header/portfolio-header.component';
import { ProjectComponentComponent } from './project-component/project-component.component';
import { ProjectTextComponent } from './project-text/project-text.component';
import { ProjectButtonsComponent } from './project-buttons/project-buttons.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroSectionComponent,
    SocialLinksComponent,
    AboutMeComponent,
    MySkillsComponent,
    PortfolioHeaderComponent,
    ProjectComponentComponent,
    ProjectTextComponent,
    ProjectButtonsComponent,
    ContactSectionComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
