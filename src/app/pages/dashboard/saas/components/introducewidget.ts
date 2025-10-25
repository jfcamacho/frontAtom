import { Component, Input, OnInit } from '@angular/core';
import { ConfigService } from '@/pages/service/config.service';
import { UserService } from '@/pages/service/user.service';
import { User } from '@/types/user';
import { PrimeNgModule } from '@/shared/prime-ng/prime-ng.module';
import { TareaService } from '@/pages/service/tarea.service';

@Component({
    selector: 'introduce-widget',
    standalone: true,
    imports: [PrimeNgModule],
    template: `<div class="card h-full">
        <div class="p-2 h-full flex flex-col justify-between">
            <div class="flex items-center justify-between mb-4">
                <div class="flex gap-4 flex-col justify-between w-full md:flex-row md:items-center">
                    <div class="flex gap-4 items-center">
                        <div class="text-4xl">👋</div>
                        <div class="flex flex-col gap-1 text-surface-600 dark:text-surface-200">
                            <span class="text-2xl font-semibold">Hola,<span class="text-color"> {{user.firstName}} {{user.lastName}}!</span></span>
                            <span>{{role}} <span class="font-bold text-primary">&#64;API Tareas - Jefferson Camacho</span></span>
                        </div>
                    </div>
                    <div class="flex items-center gap-2">
                        <button pButton pRipple label="Tareas Pendientes" icon="pi pi-send" outlined></button>
                        <button pButton pRipple label="Tareas Realizadas" icon="pi pi-chart-line"></button>
                    </div>
                </div>
            </div>
            <div class="flex flex-col gap-2 text-primary mt-6 md:mt-0">
                <span class="font-bold text-sm">Tareas por desarrollar en la presente jornada</span>
                <div class="grid grid-cols-12 gap-4 grid-nogutter font-medium">
                    <span *ngFor="let todo of todos" class="col-span-6 text-6xl md:col-span-3 flex items-center">
                        {{ todo.quantity }}
                        <span class="text-base ml-2">{{ todo.name }}</span>
                        <!-- <p-tag [severity]="todo.severity" [value]="todo.name" /> -->
                    </span>
                </div>
            </div>
        </div>
    </div>`
})
export class IntroduceWidget{

    @Input() user: User = new User()
    @Input() role: string = ""
    @Input() todos:any[] = []

    constructor(
    ){

    }

}
