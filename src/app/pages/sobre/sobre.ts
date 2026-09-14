import { Component } from '@angular/core';

interface TechGroup {
  title: string;
  icon: string;
  items: string[];
}

@Component({
  selector: 'app-sobre',
  imports: [],
  templateUrl: './sobre.html',
  styleUrl: './sobre.css',
})
export class Sobre {
  readonly techGroups: TechGroup[] = [
    {
      title: 'Backend',
      icon: '🧩',
      items: [
        'C# com .NET 10 (arquitetura MVC)',
        'Entity Framework Core 10 + Oracle EF Core',
        'Autenticação JWT (Microsoft.AspNetCore.Authentication.JwtBearer)',
        'Swagger (Swashbuckle.AspNetCore)',
        'Serilog (logs em arquivo)',
        'QuestPDF (geração de relatórios em PDF)',
      ],
    },
    {
      title: 'Frontend',
      icon: '🖥️',
      items: [
        'React 19.2.4 com TypeScript',
        'Progressive Web Application (PWA)',
        'Consumo de API REST via HTTPS',
      ],
    },
    {
      title: 'Banco de Dados',
      icon: '🗄️',
      items: [
        'Oracle Database 19.3',
        'Modelagem relacional (DER)',
      ],
    },
    {
      title: 'Inteligência Artificial',
      icon: '✨',
      items: [
        'Google.GenAI — modelo Gemini 3 Flash Preview',
        'Apoio à decisão assistencial (análise de risco clínico)',
      ],
    },
    {
      title: 'Ferramentas e Ambiente',
      icon: '🛠️',
      items: [
        'Git e GitHub para controle de versão',
        'Visual Studio Code (frontend) e Visual Studio (backend)',
      ],
    },
  ];
}
