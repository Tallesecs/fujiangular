import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AtendimentosComponent } from './components/atendimentos/atendimentos.component';
import {AtendimentoDetalheComponent} from './components/atendimento-detalhe/atendimento-detalhe.component';

const routes: Routes = [
  { path: '', component: AtendimentosComponent },
  { path: 'atendimento/:id', component: AtendimentoDetalheComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
