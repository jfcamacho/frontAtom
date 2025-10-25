import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputGroupModule } from 'primeng/inputgroup';
import { SelectModule } from 'primeng/select';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { CheckboxModule } from 'primeng/checkbox';
import { PasswordModule } from 'primeng/password';
import { RouterModule } from '@angular/router';
import { RippleModule } from 'primeng/ripple';
import { AppConfigurator } from '@/layout/components/app.configurator';
import { TextareaModule } from 'primeng/textarea';
import { FileUploadModule } from 'primeng/fileupload';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { TableModule } from 'primeng/table';
import { ProgressBarModule } from 'primeng/progressbar';
import { TagModule } from 'primeng/tag';
import { TooltipModule } from 'primeng/tooltip';
import { DatePickerModule } from 'primeng/datepicker';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ImageModule } from 'primeng/image';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { PickListModule } from 'primeng/picklist';
import { InputMaskModule } from 'primeng/inputmask';
import { AvatarModule } from 'primeng/avatar';
import { ChipModule } from 'primeng/chip';
import { PopoverModule } from 'primeng/popover';
import { FloatLabelModule } from 'primeng/floatlabel';
import { MessageModule } from 'primeng/message';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppConfigurator,
  ],
  exports: [
    ToastModule,
    SelectModule,
    InputTextModule,
    InputNumberModule,
    ButtonModule,
    InputGroupModule,
    InputGroupAddonModule,
    FormsModule,
    CheckboxModule, 
    PasswordModule, 
    RouterModule, 
    RippleModule,
    AppConfigurator,
    TextareaModule, 
    FileUploadModule,
    TableModule, 
    ProgressBarModule, 
    IconFieldModule, 
    InputIconModule,
    CommonModule,
    TagModule,
    TooltipModule,
    DatePickerModule,
    DropdownModule,
    DialogModule,
    ConfirmDialogModule,
    ProgressSpinnerModule,
    ImageModule,
    SelectButtonModule,
    ToggleButtonModule,
    PickListModule,
    InputMaskModule,
    AvatarModule,
    ChipModule,
    PopoverModule,
    FloatLabelModule,
    MessageModule
  ]
})
export class PrimeNgModule { }
