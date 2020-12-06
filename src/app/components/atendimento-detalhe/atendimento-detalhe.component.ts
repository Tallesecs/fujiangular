import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service/service.service';
import {ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';
import { ListarAtendimentos } from '../../shared/interface/atendimentos.interface';

@Component({
  selector: 'app-atendimento-detalhe',
  templateUrl: './atendimento-detalhe.component.html',
  styleUrls: ['./atendimento-detalhe.component.css']
})
export class AtendimentoDetalheComponent implements OnInit {

  public atendimento: ListarAtendimentos;
  public subscription: Subscription;
  public id: number;

  constructor(
    private atendimentosService: ServiceService,
    private router: ActivatedRoute
  ) {
    this.id = this.router.snapshot.params['id'];
  }

  ngOnInit() {
    this.loadAtendimento();
  }

  public loadAtendimento() {
    this.subscription = this.atendimentosService.getAtendimento(this.id).subscribe(
      (atendimento) => {
        this.atendimento = atendimento; console.log(this.atendimento)});
  }
}
