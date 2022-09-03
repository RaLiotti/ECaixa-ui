import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { Funcionario } from 'src/app/core/domain/funcionario';
import { FuncionarioService } from '../../shared/funcionario.service';

@Component({
  selector: 'app-cadastro-funcionario',
  templateUrl: './cadastro-funcionario.component.html',
  styleUrls: ['./cadastro-funcionario.component.scss']
})
export class CadastroFuncionarioComponent implements OnInit {


  //funcionario: Funcionario[] | undefined;

  funcionarios: Funcionario[] = [];

  funcionario = new Funcionario;

  exibir_carregar = false;


  constructor(
    public funcionarioService: FuncionarioService,
  ) { }

  ngOnInit() {
    this.funcionarios
    this.carregarFuncionarios();
    
  }

  form = new UntypedFormGroup({
    nome: new UntypedFormControl(),
    email: new UntypedFormControl(),
    cpf: new UntypedFormControl(),
    cep: new UntypedFormControl(),
    numero: new UntypedFormControl(),
    rua: new UntypedFormControl(),
  });

  cadastrarFuncionario() {

    this.funcionario.nome = this.form.value.nome;
    this.funcionario.email = this.form.value.email;
    this.funcionario.cpf = this.form.value.cpf;

   // debugger;
    console.log(this.funcionario);

    this.funcionarioService.setCadastrarFuncionario(this.funcionario).subscribe(
      success => console.log('sucesso'),
      error => console.log(error),
      () => console.log('completo')
     );

  }


  carregarFuncionarios(){
    this.exibir_carregar = true;
    this.funcionarioService.getListarFuncionarios().subscribe(data => this.funcionarios = data);
    this.exibir_carregar = false;
  }

}
