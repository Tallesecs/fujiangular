import { Component, OnInit } from '@angular/core';
import { ServiceService } from './../../service/service.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  atendimentos;

  constructor(private atendimentosService: ServiceService) { }

  ngOnInit() {
    this.atendimentos = this.atendimentosService.getAtendimentos();
  }

}
