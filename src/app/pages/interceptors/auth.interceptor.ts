import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Auth, signOut } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { getIdToken } from 'firebase/auth';
import { from, switchMap } from 'rxjs';
import { environment } from '@/environment/environmment';
import * as CryptoJS from 'crypto-js';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const auth = inject(Auth);
  const user: any = auth.currentUser;
  const router = inject(Router)
  const secretKey = environment.secretKey

  if (!user) {
    return next(req);
  }else{
    const config = sessionStorage.getItem('config')
    let desencriptado: any = {}
    if(config){
      const bytes = CryptoJS.AES.decrypt(config, secretKey);
      desencriptado = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    }
    const gmtTime = Number(user.metadata.lastLoginAt)
    const localTime = new Date()
    const endTime = gmtTime + (desencriptado.timeSession || 300000)
    // console.log(config);
    // console.log(config.timeSession);
    if(localTime > new Date(endTime)){
      signOut(auth).then( () =>  {
        sessionStorage.clear()
        localStorage.clear()
        // alert('Su sesión ha expirado vuelva a ingreasar')
        router.navigate(['auth'])
      })
      
      return next(req);
    }
  }

  return from(getIdToken(user, true)).pipe(
    switchMap((token) => {
      const authReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
      return next(authReq);
    })
  );
};
