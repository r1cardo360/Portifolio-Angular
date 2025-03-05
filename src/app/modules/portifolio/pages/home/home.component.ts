import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

//components
import { HeaderComponent } from '../../components/header/header.component';
import { KnowledgeComponent } from '../../components/knowledge/knowledge.component';
import { ExperienceComponent } from '../../components/experience/experience.component';
import { ProjectsComponent } from '../../components/projects/projects.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, 
    HeaderComponent, 
    KnowledgeComponent, 
    ExperienceComponent, 
    ProjectsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
