import { environment } from '@/environment/environmment';
import { Tarea } from '@/types/tarea';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TipoTareaService {

  url = environment.baseUrl

  constructor(
    private http: HttpClient
  ) { }

  consultarTipoTareas(){
    return this.http.get(`${this.url}/shoreKind`)
  }

  deleteTipoTareaById(id:string){
    return this.http.delete(`${this.url}/shoreKind/${id}`)
  }

  updateTipoTareaById(tarea:Tarea){
    return this.http.put(`${this.url}/shoreKind/${tarea.id}`, tarea)
  }

  crearTipoTarea(tarea: Tarea){
    return this.http.post(`${this.url}/shoreKind`, tarea)
  }
}
