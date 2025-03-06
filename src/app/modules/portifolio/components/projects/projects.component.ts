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
      alt: 'Imagem do logo de Ricardo Furlanetto',
      title: 'To do List Com React Native',
      width: '150px',
      height: '150px',
      description: `Neste projeto, utilizei React Native para desenvolver uma 
      To-Do List com as seguintes funcionalidades: adicionar tarefas, 
      exibir tarefas em uma lista dinâmica, marcar tarefas como concluídas, 
      remover tarefas, persistência dos dados utilizando AsyncStorage e um botão que consome 
      uma API para adicionar tarefas pré-definidas à lista, utilizado para fins de treinamento.
      Este projeto foi desenvolvido com o objetivo de estudar e aprimorar meus conhecimentos 
      em React Native. O código-fonte está disponível no meu GitHub, 
      acessível através do botão abaixo.`,
      links: [
        {
          name: 'Projeto To-Do-List React Native',
          href: 'https://github.com/r1cardo360/To-Do-List_React-Native'
        }
      ]
    },
    {
      src: 'assets/img/projects/RF-r1cardo360.png',
      alt: 'Imagem do logo de Ricardo Furlanetto',
      title: 'To do List Com React Native',
      width: '150px',
      height: '150px',
      description: `Este projeto é um Quiz desenvolvido para treinar a manipulação do 
      DOM com JavaScript puro. Nele, utilizei apenas JS puro com técnicas de manipulação do DOM.
      É um projeto relativamente simples e pode ser acessado na web para demonstração. 
      Atualmente, as perguntas são estáticas, mas futuramente pretendo implementar 
      uma melhoria para que sejam carregadas dinamicamente a partir de uma base de dados real.`,
      links: [
        {
          name: 'Projeto Quizz do Naruto',
          href: 'https://r1cardo360.github.io/Projeto_Quizz/'
        }
      ]
    },
    {
      src: 'assets/img/projects/RF-r1cardo360.png',
      alt: 'Imagem do logo de Ricardo Furlanetto',
      title: 'Locadora Filmes e Jogos com ASP.Net',
      width: '150px',
      height: '150px',
      description: `Este projeto foi desenvolvido para a faculdade em colaboração com meus amigos. 
      Ele conta com um banco de dados em SQLite, backend em C# com ASP.NET e front-end em C#, 
      utilizando o scaffolding do ASP.NET. 
      Foi uma experiência incrível, onde pude testar meus conhecimentos tanto no 
      front-end quanto no back-end, além de aprimorar minha lógica de programação e 
      minhas habilidades em orientação a objetos.`,
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
      description: `Este projeto foi desenvolvido como um desafio para aprimorar minhas 
      habilidades em JavaScript, HTML5 e CSS3. Trata-se de uma To-Do List simples, 
      porém funcional, construída utilizando exclusivamente essas tecnologias.
      A aplicação salva a lista de tarefas no localStorage, garantindo a persistência dos dados no navegador.
      O projeto pode ser acessado e testado através do botão abaixo.`,
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
      description: `Este foi um dos meus primeiros projetos, desenvolvido anos atrás, 
      quando iniciei no desenvolvimento web. 
      Criado com o auxílio de um curso da Alura, 
      ele foi construído utilizando apenas HTML e CSS, sem o uso de JavaScript.
      O projeto consiste em uma plataforma de livros online, 
      onde trabalhei a responsividade utilizando @mediaQuery do CSS.
      Confira o resultado clicando no botão abaixo.`,
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
