import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service/service.service';

import { ListarAtendimentos } from '../../shared/interface/atendimentos.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-atendimentos',
  templateUrl: './atendimentos.component.html',
  styleUrls: ['./atendimentos.component.css']
})
export class AtendimentosComponent implements OnInit {

  public listarAtendimentos: Array<ListarAtendimentos>;
  public subscription: Subscription;

  constructor(private atendimentosService: ServiceService) { }

  ngOnInit() {
    this.loadAtendimentos();
  }

  public loadAtendimentos(): any {
    try {
      this.subscription = this.atendimentosService.getAtendimentos().subscribe(
        (atendimento) => {
          this.listarAtendimentos = atendimento;
          console.log(this.listarAtendimentos);
        }
      );
    } catch (e) {
      console.log(e);
    }
  }
}
