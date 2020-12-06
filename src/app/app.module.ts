import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AtendimentosComponent } from './components/atendimentos/atendimentos.component';
import { AtendimentoDetalheComponent } from './components/atendimento-detalhe/atendimento-detalhe.component';

@NgModule({
   declarations: [
      AppComponent,
      AtendimentosComponent,
      AtendimentoDetalheComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
