import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { NgForm} from '@angular/forms';
import { UserService } from '../service/user.service';
import { MessageService } from 'primeng/api';
import { PrimeNgModule } from '@/shared/prime-ng/prime-ng.module';
import { Auth } from '@angular/fire/auth';
import { environment } from '@/environment/environmment';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { ConfigService } from '../service/config.service';
import * as CryptoJS from 'crypto-js';

@Component({
    selector: 'app-register',
    standalone: true,
    providers: [MessageService],
    imports: [PrimeNgModule],
    template: `
        <div class="h-screen flex w-full bg-surface-50 dark:bg-surface-950">
            <p-toast position="top-left"/>
            <div class="flex flex-1 flex-col bg-surface-50 dark:bg-surface-950 items-center justify-center relative ">
                <div class="w-11/12 sm:w-[30rem]">
                    <div class="flex flex-col">
                        <div style="height: 56px; width: 56px" class="bg-primary rounded-full flex items-center justify-center">
                            <i class="pi pi-users text-surface-0 dark:text-surface-900 !text-4xl"></i>
                        </div>
                        <div class="mt-6">
                            <h1 class="m-0 text-primary font-semibold text-4xl">Deseas registrate!</h1>
                            <span class="block text-surface-700 dark:text-surface-100 mt-2">Por favor rellena los campos solicitados</span>
                        </div>
                    </div>
                    <form #myRegister="ngForm" (ngSubmit)="register(myRegister)">
                        <div class="flex flex-col gap-4 mt-12" >
                            <p-input-group>
                                <p-inputgroup-addon>
                                    <i class="pi pi-user"></i>
                                </p-inputgroup-addon>
                                <input pInputText placeholder="Name" name="name" [(ngModel)]="name"/>
                            </p-input-group>
                            <p-input-group>
                                <p-inputgroup-addon>
                                    <i class="pi pi-at"></i>
                                </p-inputgroup-addon>
                                <input pInputText placeholder="Email" name="email" [(ngModel)]="email"/>
                            </p-input-group>
                            <p-message *ngIf="viewChargeGif" size="large" icon="pi pi-spin pi-spinner-dotted">Registrando...</p-message>
                            <p-message *ngIf="registerSucces" size="large" icon="pi pi-spin pi-spinner-dotted">Redireccionando...</p-message>
                            <div>
                                <button *ngIf="!viewChargeGif && !registerSucces" pButton pRipple class="w-full" type="submit" label="REGISTRAR"></button>
                            </div>
                            <div>
                                <button pButton pRipple class="w-full text-primary-500" [routerLink]="['/auth/login']" text label="RETORNAR"></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div [style]="{ backgroundImage: 'url(/images/pages/accessDenied-bg.jpg)' }" class="hidden lg:flex flex-1 items-center justify-center bg-cover">
                <img src="/layout/images/logo/9259956.png" style="color: white;" alt="" />
            </div>
        </div>
        <app-configurator simple />
    `
})
export class Register implements OnInit{

    constructor(
        private auth: Auth,
        private route: ActivatedRoute,
        private router: Router,
        private userService: UserService,
        private messageService: MessageService,
        private configservice: ConfigService
    ){}

    email: string = '';
    name: string = 'Nuevo usuario'
    viewChargeGif: boolean = false
    registerSucces: boolean = false

    ngOnInit(): void {
        this.email = this.route.snapshot.paramMap.get('email')!;
    }

    register(ngForm: NgForm){
        this.viewChargeGif = true
        if(ngForm.invalid){
            this.viewChargeGif = false
            return
        }
        this.userService.createUserAlone({email: this.email, name: this.name}).subscribe({
            next: (result) => {
                this.viewChargeGif = false
                this.registerSucces = true
                this.messageService.add({severity: 'success', summary: 'Éxito', detail: 'Usuario creado exitosamente...!'})
                this.login()
            },
            error: (result) => {
                this.viewChargeGif = false
                this.messageService.add({severity: 'error', summary: 'Error', detail: 'Ya existe un usuario con ese email'})
                this.messageService.add({severity: 'error', summary: 'Error', detail: result.error.error})
            }
        })

    }

    async login(){
        const password = environment.genPassword
        const secretKey = environment.secretKey
        const userCredential = await signInWithEmailAndPassword(this.auth, this.email, password)
        const encriptado = CryptoJS.AES.encrypt(JSON.stringify(userCredential.user), secretKey).toString();
        localStorage.setItem('user', encriptado)
        await this.configservice.getConfig()
        this.viewChargeGif = false
        this.router.navigate(['/dashboards'])
    }
    
}
