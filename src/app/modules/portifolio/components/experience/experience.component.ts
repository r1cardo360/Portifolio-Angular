import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

//Interfaces
import { iExperiences } from '../../interface/iExperience.interface';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  public arrayExperience = signal<iExperiences[]>([
    {
      sumary:{
        strong: 'Desenvolvedor Web',
        p: '3Ti Software 2023 - Atual'
      },
      text: `<p><strong>Função:</strong> Desenvolvedor Web (Promoção após atuar como Suporte Técnico)</p>
        <p>Minha trajetória nesta empresa iniciou como suporte técnico, onde minhas responsabilidades incluíam:</p>
        <ul>
            <li>Auxiliar usuários com problemas relacionados ao sistema, incluindo manutenção e instalação.</li>
            <li>Instalar banco de dados e prestar suporte via WhatsApp e telefone.</li>
            <li>Desenvolver e atualizar relatórios para clientes utilizando SQL, PostgreSQL e FastReport.</li>
            <li>Realizar manutenção em hardware e instalar servidores Linux (Fedora 39, 40 e 41).</li>
        </ul>
        <p>Atualmente, fui promovido a Desenvolvedor Web, assumindo novas responsabilidades, como:</p>
        <ul>
            <li>Desenvolvimento utilizando Node.js, HTML, CSS, JavaScript, jQuery e Bootstrap.</li>
            <li>Participação na análise de migração do front-end para Angular com a equipe.</li>
        </ul>`
    },
    {
      sumary:{
        strong: 'Suporte Técnico',
        p: 'Lavive Maio 2022 - Dez 2023'
      },
      text: `<p>Durante meu período na Lavive, fui responsável por:</p>
        <ul>
            <li>Realizar manutenção em mais de 100 máquinas, tanto na parte de hardware quanto de software.</li>
            <li>Instalar o banco de dados e o sistema da empresa.</li>
            <li>Auxiliar usuários com problemas nas máquinas.</li>
            <li>Ajudar na infraestrutura e cabeamento dos setores.</li>
        </ul>`
    }
  ])
}
