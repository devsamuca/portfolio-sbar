import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  menuOpen = signal(false);

  readonly links = [
    { path: '/', label: 'Início' },
    { path: '/sobre', label: 'Sobre o Projeto' },
    { path: '/casos-de-uso', label: 'Casos de Uso' },
    { path: '/documentacao', label: 'Documentação' },
    { path: '/telas', label: 'Telas e Vídeo' },
    { path: '/relatorio', label: 'Relatório' },
    { path: '/aluno', label: 'Aluno' },
  ];

  toggleMenu() {
    this.menuOpen.update((v) => !v);
  }

  closeMenu() {
    this.menuOpen.set(false);
  }
}
