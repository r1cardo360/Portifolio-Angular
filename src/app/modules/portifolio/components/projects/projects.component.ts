import { Component, signal } from '@angular/core';

//Interfaces
import {iProjects} from '../../interface/iProjects.interfaces'

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  public arrayProjects = signal<iProjects[]>([
    {
      src: 'assets/img/projects/RF-r1cardo360.png',
      alt: 'Projetos Ricardo Furlanetto',
      title: 'Ricardo Furlaneto',
      width: '100px',
      height: '51px',
      description: '',
      links: [
        {
          name: 'Conheça o Blog',
          href: 'https://projeto'
        }
      ]
    }
  ])
}
