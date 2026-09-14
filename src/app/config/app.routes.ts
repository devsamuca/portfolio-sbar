import { Routes } from '@angular/router';
import { Home } from '../pages/home/home';
import { Sobre } from '../pages/sobre/sobre';
import { CasosDeUso } from '../pages/casos-de-uso/casos-de-uso';
import { Documentacao } from '../pages/documentacao/documentacao';
import { Telas } from '../pages/telas/telas';
import { Relatorio } from '../pages/relatorio/relatorio';
import { Aluno } from '../pages/aluno/aluno';

export const routes: Routes = [
    { path: '', component: Home, title: 'SBAR+ | Portfólio de Estágio' },
    { path: 'sobre', component: Sobre, title: 'Sobre o Projeto | SBAR+' },
    { path: 'casos-de-uso', component: CasosDeUso, title: 'Casos de Uso e Cronograma | SBAR+' },
    { path: 'documentacao', component: Documentacao, title: 'Documentação | SBAR+' },
    { path: 'telas', component: Telas, title: 'Telas e Vídeo | SBAR+' },
    { path: 'relatorio', component: Relatorio, title: 'Relatório de Estágio | SBAR+' },
    { path: 'aluno', component: Aluno, title: 'Identificação do Aluno | SBAR+' },
    { path: '**', redirectTo: '' },
];
