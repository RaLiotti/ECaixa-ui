import { Component, OnInit } from '@angular/core';
import { Funcionario } from './core/domain/funcionario';
import { Teste } from './core/domain/teste';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(){}

  funcionario = new Funcionario;

  title = 'ECaixa';

  teste?: Teste;

  ngOnInit(){
    
    this.funcionario.cpf = 1015;
    this.funcionario.email = 'AAAAA';
    this.funcionario.nome = 'BBBB';

    console.log(this.funcionario);

  }

  click(){

    this.funcionario.cpf = (this.funcionario.cpf / 2) + 100 ;

    this.funcionario.email = 'mmmmmm';
    this.funcionario.nome = 'kkkkkk';

    console.log(this.funcionario);

    //this.teste.funcionarios.unshift(this.funcionario);

  }





}
