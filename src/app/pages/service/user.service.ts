import { environment } from '@/environment/environmment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = environment.baseUrl

  constructor(
    private http: HttpClient
  ) { }

  consultarUsuarios(){
    return this.http.get(`${this.url}/users`)
  }

  consultarUsuarioById(id: string){
    return this.http.get(`${this.url}/users/${id}`)
  }

  updateUsuarioById(data: any){
    return this.http.put(`${this.url}/users/${data.id}`, data)
  }

  createUserAlone(data: any){
    return this.http.post(`${this.url}/users/createAlone`, data)
  }
}
