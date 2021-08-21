import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Funcionario } from 'src/app/domain/funcionario';

@Component({
  selector: 'app-cadastro-funcionario',
  templateUrl: './cadastro-funcionario.component.html',
  styleUrls: ['./cadastro-funcionario.component.scss']
})
export class CadastroFuncionarioComponent implements OnInit {


  funcionario: Funcionario[] | undefined;


  constructor() { }

  ngOnInit() {
  }

form = new FormGroup({
  nome: new FormControl(),
  email: new FormControl(),
  cpf: new FormControl()
});




mostrar(){
  this.funcionario = this.form.value;
  console.log(this.funcionario);
}





}
