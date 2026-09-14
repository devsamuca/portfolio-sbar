import { Component } from '@angular/core';

interface Tela {
  titulo: string;
  arquivo: string;
  descricao: string;
}

@Component({
  selector: 'app-telas',
  imports: [],
  templateUrl: './telas.html',
  styleUrl: './telas.css',
})
export class Telas {
  readonly videoUrl = 'video/sbar-demo.mp4';

  readonly telas: Tela[] = [
    { titulo: 'Login', arquivo: 'screenshots/login.png', descricao: 'Autenticação do funcionário, porta de entrada do sistema.' },
    { titulo: 'Unidades de Internação', arquivo: 'screenshots/unidades.png', descricao: 'Listagem das unidades e UTIs, com leitos totais, ativos e disponíveis.' },
    { titulo: 'Leitos', arquivo: 'screenshots/leitos.png', descricao: 'Leitos de uma unidade selecionada, com status e ocupação.' },
    { titulo: 'Origens de Atendimento', arquivo: 'screenshots/origens.png', descricao: 'Gestão das origens de atendimento e suas observações.' },
    { titulo: 'Pacientes Internados', arquivo: 'screenshots/pacientes-internados.png', descricao: 'Pacientes internados por unidade, com leito, data e status do plantão.' },
    { titulo: 'Pacientes de Urgência', arquivo: 'screenshots/pacientes-urgencia.png', descricao: 'Pacientes em atendimento de urgência por origem selecionada.' },
    { titulo: 'Avaliação Geral do Paciente', arquivo: 'screenshots/sinais-vitais.png', descricao: 'Registro dos sinais vitais, situação e breve histórico do paciente.' },
    { titulo: 'Análise Inteligente (IA)', arquivo: 'screenshots/analise-ia.png', descricao: 'Análise de risco gerada por IA a partir dos sinais vitais registrados.' },
    { titulo: 'Chat com Aurora', arquivo: 'screenshots/chat-ia.png', descricao: 'Assistente virtual de apoio à decisão clínica sobre o paciente selecionado.' },
    { titulo: 'Cirurgias', arquivo: 'screenshots/avisos-cirurgia.png', descricao: 'Cirurgias agendadas para uma data, com status codificado por cor.' },
    { titulo: 'Detalhe do Aviso de Cirurgia', arquivo: 'screenshots/cirurgias.png', descricao: 'Procedimentos principal e secundário de um aviso de cirurgia.' },
    { titulo: 'Exames', arquivo: 'screenshots/exames-detalhe.png', descricao: 'Pedidos de exames laboratoriais por paciente e data.' },
    { titulo: 'Detalhe do Pedido de Exame', arquivo: 'screenshots/exames-lista.png', descricao: 'Exames de um pedido, com status pendente ou finalizado.' },
    { titulo: 'Sobre', arquivo: 'screenshots/sobre.png', descricao: 'Central de ajuda com informações sobre acesso, segurança e o desenvolvedor.' },
  ];
}
