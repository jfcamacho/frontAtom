import { environment } from '@/environment/environmment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = environment.baseUrl

  constructor(
    private http: HttpClient
  ) { }

  async login(data: any){
    return this.http.post(`${this.url}/authenticate/login`, data)
  }

  async register(data: any){
    return this.http.post(`${this.url}/authenticate/login`, data)
  }

  async resetPassword(data: any){
    return this.http.post(`${this.url}/auth/resetPassword`, data)
  }
  
}
