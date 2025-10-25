import { ConfigService } from '@/pages/service/config.service';
import { TareaService } from '@/pages/service/tarea.service';
import { TipoTareaService } from '@/pages/service/tipo-tarea.service';
import { PrimeNgModule } from '@/shared/prime-ng/prime-ng.module';
import { Tarea } from '@/types/tarea';
import { TipoTarea } from '@/types/tipoTarea';
import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-event',
  imports: [PrimeNgModule],
  templateUrl: './event.component.html',
  styleUrl: './event.component.scss',
  providers: [MessageService, ConfirmationService]
})
export class EventComponent implements OnInit{

    tarea: Tarea = new Tarea();
    tareas: Tarea[] = []
    statusList: any[] = [];
    selectedStatus: any;
    tipoTareasList: any[] = [];
    selectedtipoTarea: any;
    viewWindow: boolean = true
    showTarea: boolean = false
    headerText: string = "Crear tarea"
    viewChargeGif:boolean = false
    showTareaCheck: boolean = false
    userId: string = '';

    constructor(
        private configService: ConfigService,
        private tareaService: TareaService,
        private messageService: MessageService,
        private confirmationService: ConfirmationService,
        private tipoTareaService: TipoTareaService
    ){}

    async ngOnInit() {
        this.userId = (await this.configService.getUser()).uid
        await this.consultarTareas()
        this.statusList = (await this.configService.getConfig())['STATUS']
        this.tipoTareaService.consultarTipoTareas().subscribe({
            next: (result: any) => {
                this.tipoTareasList = result['shoreKinds']
            },
            error: (result) => {
                console.error('Error al consultar los tipos de tareas')
                console.error(result.error.error)
            }
        })
    }

    async consultarTareas(){
        this.tareaService.consultarTareas(this.userId).subscribe({
            next: (result: any) => {
                this.viewWindow = false
                this.tareas = result['shores']
            },
            error: (result: any) => {
                console.error('Error al consultar las tareas')
                console.error(result.error.error)
            }
        })
    }

    cleanBox(){
        this.selectedStatus = undefined
        this.selectedtipoTarea = undefined
        this.tarea = new Tarea();
        this.headerText = "Crear tarea"
    }
    
    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }

    navigateToCreateTarea(){
        this.cleanBox()
        this.showTarea = true;
    }

    navigateToEditTarea(id: string){
        this.cleanBox()
        this.showTarea = true;
        this.tarea = this.tareas.filter( tarea => tarea.id === id)[0]
        this.selectedStatus = this.statusList.filter( status => status.name === this.tarea.status)[0]
        this.selectedtipoTarea = this.tipoTareasList.filter( kind => kind.id === this.tarea.shoreKindId)[0]
        this.headerText = "Modificar tarea"
    }

    deleteTarea(id: string, event: Event){
        this.confirmationService.confirm({
            target: event.target as EventTarget,
            message: '¿Esta seguro de eliminar esta tarea...?',
            header: 'CONFIRME EL REQUERIMIENTO',
            icon: 'pi pi-info-circle',
            rejectLabel: 'Cancel',
            rejectButtonProps: {
                label: 'Cancelar',
                severity: 'secondary',
                outlined: true,
            },
            acceptButtonProps: {
                label: 'Eliminar',
                severity: 'danger',
            },

            accept: () => {
                this.viewWindow = true
                this.tareaService.deleteTarea(id).subscribe({
                    next: ((result: any) => {
                      this.consultarTareas()
                        this.viewWindow = false
                      this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'La tarea se ha eliminado' });
                    }),
                    error: ((result: any) => {
                        this.consultarTareas()
                        this.restartShow()
                        this.messageService.add({ severity: 'error', summary: 'Error...', detail: result.error.error });
                    })
                })
            },
            reject: () => {
                this.viewWindow = false
                this.messageService.add({ severity: 'error', summary: 'Error...', detail: 'No se ha procesado la solicitud' });
            },
        });
    }

    updateTarea(event: Event, ngForm?: NgForm){

        this.confirmationService.confirm({
            target: event.target as EventTarget,
            message: '¿Esta seguro de modificar esta tarea...?',
            header: 'CONFIRME EL REQUERIMIENTO',
            icon: 'pi pi-info-circle',
            rejectLabel: 'Cancel',
            rejectButtonProps: {
                label: 'Cancelar',
                severity: 'secondary',
                outlined: true,
            },
            acceptButtonProps: {
                label: 'Continuar',
                severity: 'info',
            },

            accept: () => {
                this.tarea.shoreKindId = this.selectedtipoTarea.id
                this.tarea.status = this.selectedStatus.name
                this.viewChargeGif = true
                if(this.showTareaCheck){
                    this.tarea.status = this.statusList[3].name
                }
                this.viewWindow = true
                this.tareaService.updateTareaById(this.tarea).subscribe({
                    next: ((result: any) => {
                        this.consultarTareas()
                        this.restartShow()
                      this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'Tarea actualizada...!' });
                    }),
                    error: ((result: any) => {
                        console.error(result);
                        this.consultarTareas()
                        this.restartShow()
                        this.messageService.add({ severity: 'error', summary: 'Error...', detail: result.error.error });
                    })
                })
            },
            reject: () => {
                this.restartShow()
                this.messageService.add({ severity: 'error', summary: 'Error...', detail: 'No se ha procesado la solicitud' });
            },
        });

    }

    blockTarea(id:string, event: Event){
        this.tarea = this.tareas.filter( tarea => tarea.id === id)[0]
        this.selectedtipoTarea = this.tipoTareasList.filter(tipo => tipo.id === this.tarea.shoreKindId)
        this.tarea.shoreKindId
        this.selectedStatus = this.statusList[2]
        this.updateTarea(event)
    }

    async createTarea(ngForm: NgForm){
        if(ngForm.invalid || !this.selectedtipoTarea?.id){
            return
        }
        this.viewChargeGif = true
        this.tarea.userId = this.userId
        this.tarea.shoreKindId = this.selectedtipoTarea.id
        this.tareaService.createTarea(this.tarea).subscribe({
            next: (result: any) => {
                this.consultarTareas()
                this.restartShow()
                this.messageService.add({severity: 'success', summary: 'Éxito...!', detail: result.message})
                this.cleanBox()
            },
            error: (result: any) => {
                this.restartShow()
                this.messageService.add({severity: 'error', summary: 'Error...!', detail: result.error.error})
            }
        })
    }

    checkTarea(id: string){
        this.showTareaCheck = true
        this.tarea = this.tareas.filter( tarea => tarea.id === id)[0]
        this.selectedtipoTarea = this.tipoTareasList.filter(tipo => tipo.id === this.tarea.shoreKindId)
        this.selectedStatus = this.statusList.filter( status => status.name === this.tarea.status)[0]
    }

    restartShow(){
        this.viewChargeGif = false
        this.viewWindow = false
        this.showTareaCheck = false
        this.showTarea = false
    }


}
