import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AppMenuitem } from './app.menuitem';
import { firebaseApp$ } from '@angular/fire/app';
import { environment } from '@/environment/environmment';
import * as CryptoJS from 'crypto-js';
import { Auth } from '@angular/fire/auth';

@Component({
    selector: 'app-menu, [app-menu]',
    standalone: true,
    imports: [CommonModule, AppMenuitem, RouterModule],
    template: ` <ul class="layout-menu" #menuContainer>
        <ng-container *ngFor="let item of model; let i = index">
            <li app-menuitem *ngIf="!item.separator" [item]="item" [index]="i" [root]="true"></li>
            <li *ngIf="item.separator" class="menu-separator"></li>
        </ng-container>
    </ul>`
})
export class AppMenu implements OnInit{
    el: ElementRef = inject(ElementRef);
    idRol: any 
    model: any[] = [];
    secretKey = environment.secretKey

    @ViewChild('menuContainer') menuContainer!: ElementRef;

    constructor(
        private auth: Auth
    ){}

    async ngOnInit() {
        this.idRol = await this.rechargeAuth()
        this.model = [
        {
            label: 'Dashboards',
            icon: 'pi pi-home',
            items: [
                {
                    label: 'Home',
                    icon: 'pi pi-fw pi-bolt',
                    routerLink: ['/dashboards/saas'],
                    // visible: this.idRol === 'Admin' ? true : false -> Se puede implementar para administrar roles
                }
            ]
        },
        {
            label: 'Administrar Tareas',
            icon: 'pi pi-th-large',
            items: [
                {
                    label: 'Tareas',
                    icon: 'pi pi-fw pi-receipt',
                    routerLink: ['/apps/manageEvents']
                }
            ]
        },
        {
            label: 'Configuraciones generales',
            icon: 'pi pi-fw pi-cog',
            visible: this.idRol === 'Admin' ? true : false,
            items: [
                {
                    label: 'Tipos de tarea',
                    icon: 'pi pi-fw pi-server',
                    routerLink: ['config/tarea']
                },
                {
                    label: 'Perfíl de usuario',
                    icon: 'pi pi-fw pi-user',
                    routerLink: ['profile/create']
                }
            ]
        },
    ];
    }

    private async rechargeAuth(){
        return new Promise((resolve, reject) => {
            this.auth.onAuthStateChanged(async (user) => {
            if (user) {
                const idTokenResult = await user.getIdTokenResult();
                const role = idTokenResult.claims['role'];
                const encriptado = CryptoJS.AES.encrypt(JSON.stringify(role), this.secretKey).toString();
                sessionStorage.setItem('role', encriptado)
                resolve(role)
            } else {
                reject('No hay un usuario autenticado');
            }
            });
            resolve('Admin')
        })
    }

    
}
