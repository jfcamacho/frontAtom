import { environment } from '@/environment/environmment';
import { Tarea } from '@/types/tarea';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  url = environment.baseUrl

  constructor(
    private http: HttpClient
  ) { }

  consultarTareas(id: string){
    return this.http.get(`${this.url}/shore?campoFiltro=userId&valorFiltro=${id}&campoOrden=createdAt&orden=desc`)
  }
  
  deleteTarea(id: string){
    return this.http.delete(`${this.url}/shore/${id}`)
  }
  
  updateTareaById(tarea: Tarea){
    return this.http.put(`${this.url}/shore/${tarea.id}`, tarea)
  }
  
  createTarea(tarea: Tarea){
    return this.http.post(`${this.url}/shore`, tarea)
  }
}
