import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ListarAtendimentos } from '../shared/interface/atendimentos.interface';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  getAtendimentos(): Observable<ListarAtendimentos[]> {
    return this.http.get<ListarAtendimentos[]>('http://localhost:3000/atendimentos',
       {withCredentials: false, responseType: 'json' });
  }

  getAtendimento(id): Observable<ListarAtendimentos> {
    return this.http.get<ListarAtendimentos>(`http://localhost:3000/atendimentos/${id}`,
      {withCredentials: false, responseType: 'json' });
  }
}
