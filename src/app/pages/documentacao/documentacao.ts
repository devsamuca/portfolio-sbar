import { Component } from '@angular/core';

interface Diagrama {
  titulo: string;
  arquivo: string;
  descricao: string;
}

@Component({
  selector: 'app-documentacao',
  imports: [],
  templateUrl: './documentacao.html',
  styleUrl: './documentacao.css',
})
export class Documentacao {
  readonly diagramas: Diagrama[] = [
    {
      titulo: 'Diagrama de Caso de Uso',
      arquivo: 'diagramas/caso-de-uso.png',
      descricao: 'Os 15 casos de uso do sistema e suas relações de extensão a partir do ator Funcionário.',
    },
    {
      titulo: 'Diagrama de Classes',
      arquivo: 'diagramas/classe.png',
      descricao: 'Estrutura estática do sistema: classes, atributos, métodos e relacionamentos.',
    },
    {
      titulo: 'Diagrama de Entidade e Relacionamento (DER)',
      arquivo: 'diagramas/der.png',
      descricao: 'Modelagem lógica do banco de dados Oracle: entidades, atributos e relacionamentos.',
    },
    {
      titulo: 'Diagrama de Sequência — Análise com IA',
      arquivo: 'diagramas/sequencia-1.png',
      descricao: 'Interação entre View, GeminiController e GeminiApi na geração da análise inteligente.',
    },
    {
      titulo: 'Diagrama de Sequência — Operações CRUD',
      arquivo: 'diagramas/sequencia-2.png',
      descricao: 'Fluxo de criação, leitura, atualização e exclusão de observações de unidade.',
    },
    {
      titulo: 'Diagrama de Estado',
      arquivo: 'diagramas/estado.png',
      descricao: 'Ciclo de vida do usuário no sistema, com transição entre os estados Ativo e Inativo.',
    },
    {
      titulo: 'Diagrama de Implantação',
      arquivo: 'diagramas/implantacao.png',
      descricao: 'Arquitetura física: PC do usuário, servidor de aplicação (Nginx + API) e servidor Oracle.',
    },
    {
      titulo: 'Workflow AS-IS (BPMN)',
      arquivo: 'diagramas/bpmn-workflow.png',
      descricao: 'Processo atual de passagem de plantão e comunicação assistencial, antes do SBAR+.',
    },
  ];

  readonly documentosComplementares = [
    { titulo: 'Documento de Visão', arquivo: 'documentos/documento-visao.pdf' },
    { titulo: 'Plano de Estágio', arquivo: 'documentos/plano-de-estagio.pdf' },
  ];
}
