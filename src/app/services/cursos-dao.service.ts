import { Injectable } from '@angular/core';
import { Curso } from '../models/Curso';
import { CursoRepository } from './cursoRepository';

@Injectable({
  providedIn: 'root'
})
export class CursosDaoService implements CursoRepository {

  constructor() { }

  buscaListaDeCursos(): Curso[] {
    return [
      {
        "nome": "O curso completo de Banco de Dados e SQL, sem mistérios!",
        "descricao": "Business Intelligence, SQL Server, MySQL, Oracle, T-SQL e PLSQL! Tudo aqui no curso de bancos de dados relacionais!",
        "dataDeCriacao": "2020-09-01",
        "linkDoCurso": "https://www.udemy.com/course/bancos-de-dados-relacionais-basico-avancado/",
        "linkDaImagem": "https://img-c.udemycdn.com/course/240x135/860444_34ed_34.jpg"
      },
      {
        "nome": "Curso Web Moderno Completo com JavaScript 2021 + Projetos",
        "descricao": "Domine Web, 14 Cursos + Projetos, Javascript, Angular, React, Vue, Node, HTML, CSS, jQuery, Bootstrap Webpack Gulp MySQL",
        "dataDeCriacao": "2021-06-01",
        "linkDoCurso": "https://www.udemy.com/course/curso-web/",
        "linkDaImagem": "https://img-c.udemycdn.com/course/240x135/1465244_ed1a_3.jpg"
      },
      {
        "nome": "Desenvolvimento Android 2018 - Aprenda a criar 15 apps",
        "descricao": "Curso completo de desenvolvimento Android; Crie na prática apps como: Instagram, Flappy Bird, WhatsApp e muito mais.",
        "dataDeCriacao": "2021-04-01",
        "linkDoCurso": "https://www.udemy.com/course/curso-completo-do-desenvolvedor-android/",
        "linkDaImagem": "https://img-c.udemycdn.com/course/240x135/620660_4cf3_6.jpg"
      },
      {
        "nome": "Desenvolvimento Web Completo 2021 - 20 cursos + 20 projetos",
        "descricao": "Domine Web - 20 Cursos - HTML5, CSS3, SASS, Bootstrap, JS, ES6, PHP 7, OO, MySQL, JQuery, MVC, APIs, IONIC e muito mais",
        "dataDeCriacao": "2021-06-01",
        "linkDoCurso": "https://www.udemy.com/course/web-completo/",
        "linkDaImagem": "https://img-c.udemycdn.com/course/240x135/1341268_c20e_3.jpg"
      },
      {
        "nome": "Java COMPLETO Programação Orientada a Objetos +Projetos",
        "descricao": "Curso mais didático e completo de Java e OO, UML, JDBC, JavaFX, Spring Boot, JPA, Hibernate, MySQL, MongoDB e muito mais",
        "dataDeCriacao": "2021-04-01",
        "linkDoCurso": "https://www.udemy.com/course/java-curso-completo/",
        "linkDaImagem": "https://img-c.udemycdn.com/course/240x135/1701388_0134.jpg"
      }
    ];
  }
}
