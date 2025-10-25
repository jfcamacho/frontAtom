import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@Component({
    selector: 'upgrade-widget',
    standalone: true,
    imports: [ButtonModule, RippleModule],
    template: `<div class="h-full bg-primary  flex justify-between items-center pl-8 py-4 rounded-md overflow-hidden">
        <div class="flex flex-col justify-center">
            <div><span class="font-bold text-white dark:text-surface-900 text-sm">Logra tus objetivos</span></div>
            <div>
                <span class="font-bold text-white dark:text-surface-900 mt-1 text-4xl m-0">Gestiona tus tareas</span>
            </div>
            <div>
                <button pButton pRipple icon="pi pi-database" (click)="navigateToRoute()" label="Ver tareas" class="!bg-white mt-4 dark:!text-surface-900" outlined></button>
            </div>
        </div>
        <div><img class="-mr-4" [attr.draggable]="false" src="/images/dashboard/saas-card.png" alt="" /></div>
    </div>`
})
export class UpgradeWidget {
    constructor(
        private router: Router
    ){}
    async navigateToRoute(){
        this.router.navigate([`/apps/manageEvents`])
    }
}
