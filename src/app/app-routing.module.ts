import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroFuncionarioComponent } from './core/pages/cadastro-funcionario/cadastro-funcionario.component';

const routes: Routes = [

  {path: 'cadastro-funcionario', component: CadastroFuncionarioComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
