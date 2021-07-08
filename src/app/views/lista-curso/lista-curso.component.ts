import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/Curso';
import { CursoRepository } from 'src/app/services/cursoRepository';
import { CursosDaoService } from 'src/app/services/cursos-dao.service';

@Component({
  selector: 'app-lista-curso',
  templateUrl: './lista-curso.component.html',
  styleUrls: ['./lista-curso.component.css']
})
export class ListaCursoComponent implements OnInit {
  mostraLoading: boolean = true;
  temCursos: boolean = true;
  cursos: Curso[] = [];

  cursoRepository: CursoRepository = new CursosDaoService();

  constructor() { }

  async ngOnInit() {
    await this.sleep(3000);
    this.mostraLoading = false;
    this.cursos = this.cursoRepository.buscaListaDeCursos();
    if (this.cursos.length > 0) this.temCursos = true;
    else this.temCursos = false;
  }

  sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  redirecionaParaCurso(curso: Curso) {
    window.location.href = curso.linkDoCurso;
  }

}
