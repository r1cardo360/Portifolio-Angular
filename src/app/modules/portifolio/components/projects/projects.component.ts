import { Component, signal, inject } from '@angular/core';

//Dialog
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

//Interfaces
import {iProjects} from '../../interface/iProjects.interfaces'

//Materials
import {MatDialog, MatDialogModule} from '@angular/material/dialog';

//Enum
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';


@Component({
  selector: 'app-projects',
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog)
  public arrayProjects = signal<iProjects[]>([
    {
      src: 'assets/img/projects/RF-r1cardo360.png',
      alt: 'To do List Com React Native',
      title: 'Ricardo Furlaneto',
      width: '150px',
      height: '150px',
      description: `Neste projeto utilize React Native para desenvolver um To-Do-List
      que tenham as possibilidades de Adicionar Tarefas, Exibir tarefas em uma lista dinâmica, 
      Marca como concluidas, Remover tarefas, Persistencia dos dados utilizndo AsyncStorage, 
      Também tem um botão que consome uma api para jogar algumas tarefas já prontas na lista apenas
      para treinamento mesmo.
      Este projeto foi desenvolvido apenas para estudo do React Native.
      Pode ser acessado no meu GitHub pressionando o botão abaixo.`,
      links: [
        {
          name: 'Projeto To-Do-List React Native',
          href: 'https://github.com/r1cardo360/To-Do-List_React-Native'
        }
      ]
    },
    {
      src: 'assets/img/projects/RF-r1cardo360.png',
      alt: 'To do List Com React Native',
      title: 'Ricardo Furlaneto',
      width: '150px',
      height: '150px',
      description: `Este foi um projeto Quizz para poder treinar o DOM do Javascript.
      Neste projeto utilize apenas o js puro com técnicas de DOM.
      É um projeto relativamente simples e pode ser acessado na web para analisar como funciona.
      Suas perguntas estão estaticas futuramente posso trazer uma melhoria onde as perguntas 
      serao consumidas de uma base de dados reais para serem dinâmicas.`,
      links: [
        {
          name: 'Projeto Quizz do Naruto',
          href: 'https://r1cardo360.github.io/Projeto_Quizz/'
        }
      ]
    },
    {
      src: 'assets/img/projects/RF-r1cardo360.png',
      alt: 'Locadora Filmes e Jogos com ASP.Net',
      title: 'Ricardo Furlaneto',
      width: '150px',
      height: '150px',
      description: `Este é um projeto da faculdade que fiz em colaboração com os meus Amigos.
      este projeto foi desenvolvio o seu banco de dados em SQLite, backend em C# com ASP.Net
      e seu front-end também em c# utilizando o scafolding do aspNet uma experiencia magnifica
      onde pulde testar meus conhecimentos no front end e backend e desenvolver ainda mais minha lógica
      e minhas habiliudades em orientação a objetos.`,
      links: [
        {
          name: 'Projeto Locadora Filmes e Jogos',
          href: 'https://github.com/r1cardo360/Locadora_Filmes_e_Jogos_ASPNET'
        }
      ]
    },
    {
      src: 'assets/img/projects/RF-r1cardo360.png',
      alt: 'Imagem do logo de Ricardo Furlanetto',
      title: 'To-Do-List em JavaScript',
      width: '150px',
      height: '150px',
      description: `Neste projeto para desenvolver ainda mais minhas habilidades com o Javascript
      html5 e css3 foi feito um desafio de construção de um to-do-list simples mas funcional
      utilizando apenas as tecnologias mencionadas acima.
      este projeto pode ser acesado e utilizado para teste no botão abaixo.
      ele salva a lista usando o localStorage da web.`,
      links: [
        {
          name: 'To-Do-List JavaScript',
          href: 'https://todolistric.netlify.app/'
        }
      ]
    },
    {
      src: 'assets/img/projects/RF-r1cardo360.png',
      alt: 'Imagem do logo de Ricardo Furlanetto',
      title: 'AluraBooks',
      width: '150px',
      height: '150px',
      description: `Este é um dos meus primeiros projetos a anos atraz quando comecei a 
      desenvolver web. Este projeto foi desenvolvido com auxilio de um curso da Alura
      e foi feito apenas com html e css sem utilização de javascript.
      neste projeto desenvolvi uma plataforma de livros onlie e fiz a responsividade
      utilizando @mediaQuery do css.
      confira clicando no botão abaixo.`,
      links: [
        {
          name: 'AluraBooks',
          href: 'https://fancy-donut-b245a9.netlify.app/'
        }
      ]
    }
  ]);

  public openDialog(data: iProjects){
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
      
    })
  }

}
