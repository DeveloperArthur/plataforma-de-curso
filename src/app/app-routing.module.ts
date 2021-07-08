import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaCursoComponent } from './views/lista-curso/lista-curso.component';

const routes: Routes = [{
  path: "",
  component: ListaCursoComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
