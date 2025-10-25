import { inject } from '@angular/core';
import { Auth, authState, signOut } from '@angular/fire/auth';
import { CanActivateFn, Router } from '@angular/router';
import { map, take } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {

  const auth = inject(Auth)
  const router = inject(Router)

  return authState(auth).pipe(
    take(1),
    map((user: any) => {
      if (user) {
        const gmtTime = Number(user.metadata.lastLoginAt)
        const localTime = new Date()
        const endTime = gmtTime + 2*60*60*1000
        if(localTime > new Date(endTime)){
          signOut(auth).then( () =>  {
            router.navigate(['/auth']);
          })
          
          return false
        }
        return true;
      } else {
        router.navigate(['/auth']);
        return false;
      }
    }))

};

