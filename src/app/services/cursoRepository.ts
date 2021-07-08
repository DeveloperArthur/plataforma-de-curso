import { Observable } from "rxjs";
import { Curso } from "../models/Curso";

export interface CursoRepository{
    buscaListaDeCursos(): Curso[];
}