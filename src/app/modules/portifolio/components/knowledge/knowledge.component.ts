import { Component, signal } from '@angular/core';

//Interface
import { iKnowledge } from '../../interface/iKnoledge.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<iKnowledge[]>([
    {
      src: 'assets/icons/knowledge/html5.svg',
      alt: 'icone de conhecimento do HTML5'
    },
    {
      src: 'assets/icons/knowledge/css3.svg',
      alt: 'icone de conhecimento do CSS3'
    },
    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt: 'icone de conhecimento do JavaScript'
    },
    {
      src: 'assets/icons/knowledge/nodejs.svg',
      alt: 'icone de conhecimento do NodeJS'
    },
    {
      src: 'assets/icons/knowledge/sass.svg',
      alt: 'icone de conhecimento do sass'
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'icone de conhecimento do Angular'
    }
  ])
}
