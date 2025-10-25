import { ConfigService } from '@/pages/service/config.service';
import { TipoTareaService } from '@/pages/service/tipo-tarea.service';
import { PrimeNgModule } from '@/shared/prime-ng/prime-ng.module';
import { Tarea } from '@/types/tarea';
import { TipoTarea } from '@/types/tipoTarea';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-tarea',
  imports: [PrimeNgModule],
  templateUrl: './tarea.component.html',
  styleUrl: './tarea.component.scss',
  providers: [MessageService, ConfirmationService],
})
export class TareaComponent implements OnInit{
  tarea: TipoTarea = new TipoTarea()
  tareas: TipoTarea[] = []
  viewChargeGif: boolean = false
  statusList: any[] = [];
  selectedStatus: any
  config: any;

  constructor(
    private tipoTareaService: TipoTareaService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private configService: ConfigService
  ){
  }

  async ngOnInit() {
    this.config = await this.configService.getConfig();
    this.statusList = this.config.STATUS;
    this.consultarTareas()
    this.cleanBox()
  }

  async consultarTareas(){
    this.viewChargeGif = true
    this.tipoTareaService.consultarTipoTareas().subscribe({
      next: (result: any) => {
        this.tareas = result['shoreKinds']
        this.viewChargeGif = false
      }
    })
  }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  async selectTareaById(id: string){
    this.tarea = await this.searchDocument(id)
    this.selectedStatus = this.statusList.filter( (status: any) => status.name === this.tarea.status)[0]
  }

  updateTarea(id: string, event: Event){
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: '¿Esta seguro de actualizar esta tarea...?',
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
          this.viewChargeGif = true
          this.tarea.status = this.selectedStatus.name
          this.tipoTareaService.updateTipoTareaById(this.tarea).subscribe({
              next: ((result: any) => {
                this.consultarTareas()
                this.messageService.add({ severity: 'info', summary: 'Confirmado', detail: 'La tarea se ha actualizado' });
              }),
              error: (error: any) => {
                this.viewChargeGif = false
                this.messageService.add({ severity: 'error', summary: 'Error...', detail: error.error.message });
              }
          })
      },
      reject: () => {
          this.viewChargeGif = false
          this.messageService.add({ severity: 'error', summary: 'Rechazado...', detail: 'No se ha procesado la solicitud' });
      },
    });
  }

  cleanBox(){
    this.tarea = new TipoTarea();
    this.selectedStatus = undefined
  }

  createTarea(ngForm: NgForm){
    if(ngForm.invalid){
      return
    }
    this.viewChargeGif = true
    
    try {
      this.tarea.status = this.selectedStatus?.name || ''
      this.tipoTareaService.crearTipoTarea(this.tarea).subscribe({
        next: (async (result: any) => {
          await this.consultarTareas()
          this.cleanBox()
          this.messageService.add({severity: 'success', summary: 'Tarea creada', detail: 'La tarea ha sido creada'})
        }),
        error: ((error: any) => {
          this.viewChargeGif = false
          this.messageService.add({severity: 'error', summary: 'Error', detail: 'No se ha podido crear la actividad'})
        })
      })
    } catch (error) {
      this.viewChargeGif = false
      this.messageService.add({severity: 'error', summary: 'Error', detail: 'No se ha podido crear la actividad'})
    }
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
                this.viewChargeGif = true
                this.tipoTareaService.deleteTipoTareaById(id).subscribe({
                    next: ((result: any) => {
                      this.consultarTareas()
                      this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'La actividad se ha eliminado' });
                    })
                })
            },
            reject: () => {
                this.viewChargeGif = false
                this.messageService.add({ severity: 'error', summary: 'Error...', detail: 'No se ha procesado la solicitud' });
            },
        });
  }

  private async searchDocument(id: string): Promise<Tarea>{
    return await new Promise((resolve) => {
      this.tareas.filter( (tarea: any) => {
        if(tarea.id === id){
          resolve(tarea)
        }
      })
    })
  }
}
