import {Component} from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import {Router, RouterModule} from '@angular/router';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { PrimeNgModule } from '@/shared/prime-ng/prime-ng.module';
import { MessageService } from 'primeng/api';
import { ConfigService } from '../service/config.service';
import { environment } from '@/environment/environmment';
import * as CryptoJS from 'crypto-js';

@Component({
    selector: 'app-login-2',
    standalone: true,
    imports: [
        PrimeNgModule,
        ],
    template: `
    <div class="h-screen flex w-full bg-surface-50 dark:bg-surface-950">
    <p-toast />
            <div [style]="{ backgroundImage: 'url(/images/pages/accessDenied-bg.jpg)' }" class="hidden lg:flex flex-1 items-center justify-center bg-cover">
                <img src="/layout/images/logo/9259956.png" width="164" alt="" />
            </div>
            <div class="flex flex-1 flex-col items-center justify-center">
                <div class="w-11/12 sm:w-[30rem] relative">
                    <div class="flex flex-col">
                        <div style="height: 56px; width: 56px" class="bg-primary rounded-full flex items-center justify-center">
                            <i class="pi pi-sign-in text-surface-0 dark:text-surface-900 !text-4xl"></i>
                        </div>
                        <div class="mt-6">
                            <h1 class="m-0 text-primary font-semibold text-4xl">Bienvenido...!</h1>
                            <span class="block text-surface-700 dark:text-surface-100 mt-2">Por favor completa los campos para acceder al sistema</span>
                        </div>
                    </div>
                    <form #myLogin="ngForm" (ngSubmit)="login(myLogin)">
                        <div class="flex flex-col gap-4 mt-12">
                            <p-input-group>
                                <p-inputgroup-addon>
                                    <i class="pi pi-user"></i>
                                </p-inputgroup-addon>
                                <input pInputText type="text" name="email" [(ngModel)]="email" placeholder="Email" />
                            </p-input-group>
                            <p-message *ngIf="viewChargeGif" size="large" icon="pi pi-spin pi-spinner-dotted">Autenticando...</p-message>
                            <div>
                                <button *ngIf="!viewChargeGif" pButton pRipple type="submit" class="w-full" label="LOGIN"></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <app-configurator simple />`,
    providers: [MessageService]
})
export class Login2 {

    secretKey = environment.secretKey
    password = environment.genPassword

    constructor(
        private auth: Auth,
        private router: Router,
        private messageService: MessageService,
        private configservice: ConfigService
    ) {}
    viewChargeGif: boolean = false;
    email: string = '';

    async login(ngForm: NgForm){
        try {
            this.viewChargeGif = true
            if(this.password === '' || this.email === ''){
                this.errorMessage('Debe ingresar usuario y contraseña')
            this.viewChargeGif = false;
                return
            }
            const userCredential = await signInWithEmailAndPassword(this.auth, this.email, this.password)
            const encriptado = CryptoJS.AES.encrypt(JSON.stringify(userCredential.user), this.secretKey).toString();
            localStorage.setItem('user', encriptado)
            await this.configservice.getConfig()
            this.viewChargeGif = false
            this.router.navigate(['/dashboards'])
        } catch (error) {
            this.viewChargeGif = false;
            this.messageService.add({ severity: 'info', summary: "Error", detail: 'El usuario no se ha registrado redireccionado....'})
            setTimeout(() => {
                this.router.navigate([`/auth/register/${this.email}`])
            }, 2500);
        }
    }

    private async errorMessage(message: string){
        this.messageService.add({ severity: 'error', summary: 'Error', detail: message });
    }
}
