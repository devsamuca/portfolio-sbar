import { Component } from '@angular/core';

interface CasoDeUso {
  numero: string;
  nome: string;
  descricao: string;
  nivel: number;
}

interface CronogramaFase {
  fase: string;
  periodo: string;
  status: 'Concluído' | 'Em andamento';
  entregaveis: string[];
}

@Component({
  selector: 'app-casos-de-uso',
  imports: [],
  templateUrl: './casos-de-uso.html',
  styleUrl: './casos-de-uso.css',
})
export class CasosDeUso {
  readonly casosDeUso: CasoDeUso[] = [
    { numero: '1', nome: 'Listar Pacientes em Urgência', descricao: 'Lista os pacientes em atendimento de urgência na origem selecionada, com data e status do atendimento.', nivel: 0 },
    { numero: '1.1', nome: 'Gerenciar Sinais Vitais do Paciente', descricao: 'Registro e acompanhamento dos sinais vitais e da avaliação clínica do paciente.', nivel: 1 },
    { numero: '1.1.1', nome: 'Listar Prescrições', descricao: 'Lista os medicamentos e procedimentos prescritos para o paciente.', nivel: 2 },
    { numero: '1.1.2', nome: 'Gerar Análise com IA', descricao: 'Gera, via Gemini, uma análise de risco a partir dos sinais vitais, destacando anomalias, riscos e recomendações.', nivel: 2 },
    { numero: '1.1.3', nome: 'Listar Pedidos de Exames', descricao: 'Lista os pedidos de exames do paciente, com o status de cada exame.', nivel: 2 },
    { numero: '1.1.4', nome: 'Gerenciar Histórico', descricao: 'Permite visualizar o histórico de registros do paciente e sua evolução clínica.', nivel: 2 },
    { numero: '1.2', nome: 'Gerenciar Observação da Origem', descricao: 'Gerencia observações relacionadas à origem de atendimento selecionada.', nivel: 1 },
    { numero: '2', nome: 'Listar Pacientes Internados', descricao: 'Lista os pacientes internados por unidade/UTI, com leito, data de internação e status do plantão.', nivel: 0 },
    { numero: '2.1', nome: 'Gerenciar Observação da Unidade', descricao: 'Gerencia as observações realizadas pelos funcionários da unidade de internação/UTI.', nivel: 1 },
    { numero: '3', nome: 'Listar Unidade de Internação', descricao: 'Lista as unidades e UTIs do hospital, com status, leitos totais, ativos e disponíveis.', nivel: 0 },
    { numero: '3.1', nome: 'Gerenciar Leitos', descricao: 'Exibe os leitos da unidade/UTI selecionada, incluindo status e ocupação.', nivel: 1 },
    { numero: '4', nome: 'Listar Pedidos de Exames', descricao: 'Lista os pedidos de exames de um paciente, distinguindo por data.', nivel: 0 },
    { numero: '4.1', nome: 'Listar Exames', descricao: 'Lista os exames solicitados em cada pedido de exame, com pendentes e concluídos.', nivel: 1 },
    { numero: '5', nome: 'Listar Avisos de Cirurgia', descricao: 'Lista as cirurgias agendadas para uma data, com status (agendada, em andamento, concluída, cancelada...).', nivel: 0 },
    { numero: '5.1', nome: 'Listar Cirurgias', descricao: 'Lista os procedimentos de cada aviso de cirurgia, com tipo principal e secundário.', nivel: 1 },
    { numero: '6', nome: 'Listar Pacientes com Alta', descricao: 'Permite visualizar os pacientes que já obtiveram alta hospitalar.', nivel: 0 },
  ];

  readonly cronograma: CronogramaFase[] = [
    {
      fase: 'Estágio Supervisionado I — Análise',
      periodo: 'T1 2026 (jan–abr)',
      status: 'Concluído',
      entregaveis: [
        'Cronograma de estágio e Plano de Estágio',
        'Documento de Visão e Especificação Suplementar',
        'Telas do projeto e Diagrama de Caso de Uso',
        'Workflow (BPMN AS-IS) e Glossário',
      ],
    },
    {
      fase: 'Estágio Supervisionado I — Projeto',
      periodo: 'T1 2026',
      status: 'Concluído',
      entregaveis: [
        'Especificação de caso de uso (15 casos de uso)',
        'Diagrama de Classe e DER',
        'Diagramas de Sequência e Diagrama de Estado',
        'Diagrama de Implantação',
        'Implementação inicial dos casos de uso',
      ],
    },
    {
      fase: 'Estágio Supervisionado II — Implementação I',
      periodo: 'A partir do T2 2026',
      status: 'Em andamento',
      entregaveis: [
        'Status e controle do desenvolvimento',
        'Indicadores (KPIs) de acompanhamento',
        'Qualidade e previsões de entrega',
      ],
    },
    {
      fase: 'Estágio Supervisionado II — Implementação II',
      periodo: 'A partir do T3 2026',
      status: 'Em andamento',
      entregaveis: [
        'Alcance dos objetivos definidos no Documento de Visão',
        'Resultados de qualidade',
        'Controle de custo, esforço e desempenho',
      ],
    },
  ];
}
