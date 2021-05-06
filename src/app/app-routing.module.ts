import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { EntrarComponent } from './entrar/entrar.component';
import { InicioComponent } from './inicio/inicio.component';
import { TemaComponent } from './tema/tema.component';

const routes: Routes = [
  {path: '', redirectTo: 'entrar', pathMatch: 'full'}, /*quando o path for vazio ele vai redirecionar para a página entrar*/
  {path: 'entrar', component: EntrarComponent}, /*quando o path for entrar ele vai para a página de login*/
  {path: 'cadastrar', component: CadastrarComponent}, /*quando o path for cadastrar ele vai pra página de cadastro*/
  {path: 'inicio', component: InicioComponent},
  {path: 'tema', component: TemaComponent},
  {path: 'tema-edit/:id', component: TemaEditComponent},
  {path: 'tema-delete/:id', component: TemaDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
