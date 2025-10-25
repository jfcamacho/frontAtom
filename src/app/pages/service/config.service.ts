import { environment } from '@/environment/environmment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  url = environment.baseUrl
  secretKey = environment.secretKey

  constructor(
    private http: HttpClient
  ) { }

  async getConfig(): Promise<any>{
    return new Promise((resolve, reject) => {
      const config = sessionStorage.getItem('config')
      if(config){
        const bytes = CryptoJS.AES.decrypt(config, this.secretKey);
        const desencriptado = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        resolve(desencriptado)
      }else{
        this.http.get(`${this.url}/config`).subscribe({
          next: (result => {
            const encriptado = CryptoJS.AES.encrypt(JSON.stringify(result), this.secretKey).toString();
            sessionStorage.setItem('config', encriptado)
            resolve(result)
          }),
          error: ((error) => {
            reject(error)
          })
        })
      }
    })
  }

  async getUser(): Promise<any>{
    return new Promise((resolve, reject) => {
      const config = localStorage.getItem('user')
      try {
        if(config){
          const bytes = CryptoJS.AES.decrypt(config, this.secretKey);
          const desencriptado = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
          resolve(desencriptado)
        }else{
          resolve('ok')
          // alert('Error en el sistema vuelva a acceder');
        }
      } catch (error) {
        reject(error)
      }
    })
  }

  async getRole(): Promise<any>{
    return new Promise((resolve, reject) => {
      const config = sessionStorage.getItem('role')
      try {
        if(config){
          const bytes = CryptoJS.AES.decrypt(config, this.secretKey);
          const desencriptado = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
          resolve(desencriptado)
        }else{
          resolve('ok')
          // alert('Error en el sistema vuelva a acceder');
        }
      } catch (error) {
        reject(error)
      }
    })
  }
}
