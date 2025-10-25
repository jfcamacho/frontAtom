import { Component, OnInit } from '@angular/core';
import { IntroduceWidget } from '@/pages/dashboard/saas/components/introducewidget';
import { UpgradeWidget } from '@/pages/dashboard/saas/components/upgradewidget';
import { TareaService } from '@/pages/service/tarea.service';
import { UserService } from '@/pages/service/user.service';
import { ConfigService } from '@/pages/service/config.service';
import { User } from '@/types/user';
import { PerformanceWidget } from "./components/performancewidget";
import { PrimeNgModule } from '@/shared/prime-ng/prime-ng.module';

@Component({
    selector: 'app-dashboard-saas',
    standalone: true,
    imports: [PrimeNgModule, IntroduceWidget, UpgradeWidget, PerformanceWidget],
    template: `<div class="grid grid-cols-12 gap-8 mt-1 relative">

        <div *ngIf="viewWindow" class="absolute inset-0 flex items-center justify-center bg-blue-500 bg-opacity-50 z-10">
            <p-progress-spinner strokeWidth="8" fill="transparent" animationDuration=".5s" [style]="{ width: '50px', height: '50px' }" />
        </div>
        <div class="col-span-12 md:col-span-8">
            <introduce-widget [user]="user" [todos]="todos" [role]="role"/>
        </div>
        <div class="col-span-12 md:col-span-4">
            <upgrade-widget />
        </div>

        <div class="col-span-12">
            <performance-widget [estadistica]="todosPadre"/>
        </div>
    </div>`
})
export class DashboardSaas implements OnInit{

    viewWindow: boolean = false
    user: User = new User()
    role: string = ""
    todosPadre: any[] = [];
    todos:any[] = [
        {quantity: 0, name: 'Asignadas'},
        {quantity: 0, name: 'Activas'},
        {quantity: 0, name: 'Finalizadas'},
        {quantity: 0, name: 'Bloqueadas'},
    ]

    constructor(

        private configService: ConfigService,
        private userService: UserService,
        private tareaService: TareaService
    ){}


    async ngOnInit() {
        this.viewWindow = true
        const userRef = await this.configService.getUser()
        const statesList = (await this.configService.getConfig())['STATUS']
        this.userService.consultarUsuarioById(userRef.uid).subscribe({
            next: async (result: any) => {
                this.user = result
                this.role = await this.getRole(result.role)

                this.tareaService.consultarTareas(result.id).subscribe({
                    next: ((result: any) => {
                        this.viewWindow = false
                        const shores = result['shores']
                        this.todos[0].quantity = shores.length
                        shores.forEach( (element: any) => {
                            element.status === statesList[0].name ? this.todos[1].quantity++ :
                            element.status === statesList[3].name ? this.todos[2].quantity++ :
                            this.todos[3].quantity++
                        });
                        this.todosPadre = [...this.todos]
                    })
                })
            }
        })
    }

    async getRole(role: string){
        let newRole = ""
        const roles = (await this.configService.getConfig())['ROLES']
        roles.forEach((element: any) => {
            if(element['code'] === role){
                newRole = element['name']
            }
        });
        return newRole;
    }
}
