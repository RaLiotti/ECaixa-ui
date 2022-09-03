import { Injectable  } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Funcionario } from '../domain/funcionario';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  funcionarios = '/api/funcionario/funcionarios';

  cadastrarFuncionario = '/api/funcionario/cadastrar';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


constructor(private httpClient: HttpClient) { }




public getListarFuncionarios(): Observable<Funcionario[]>{
  debugger;
  return this.httpClient.get<Funcionario[]>(this.funcionarios);
}

public setCadastrarFuncionario(funcionario: Funcionario){

 debugger;
  return this.httpClient.post(this.cadastrarFuncionario, funcionario);

}

}
