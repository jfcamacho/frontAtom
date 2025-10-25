import {Component} from '@angular/core';
import { PrimeNgModule } from '@/shared/prime-ng/prime-ng.module';
import { ActivatedRoute } from '@angular/router';
import { User } from '@/types/user';
import { UserService } from '../service/user.service';
import { MessageService } from 'primeng/api';
import { ConfigService } from '../service/config.service';

@Component({
    selector: 'user-create',
    standalone: true,
    imports: [PrimeNgModule],
    templateUrl: './usercreate.html',
    providers: [MessageService]
})
export class UserCreate {

    user: User;
    viewWindow: boolean = false

    constructor(
        private route: ActivatedRoute,
        private userService: UserService,
        private messageService: MessageService,
        private configService: ConfigService
    ){
        this.user = new User();
        this.user.id = this.route.snapshot.paramMap.get("id") || undefined
    }

    async ngOnInit() {
        const userRef = await this.configService.getUser()
        this.userService.consultarUsuarioById(userRef.uid).subscribe({
            next: ((result: any) => {
                this.user = result
            })
        })
    }

    async updateUser(){
        this.viewWindow = true
        this.userService.updateUsuarioById(this.user).subscribe({
            next: ((result: any) => {
        this.viewWindow = false
                this.messageService.add({severity: 'success', summary: 'Éxito...!', detail: result.message})
            }),
            error: ((result: any) => {
        this.viewWindow = false
                this.messageService.add({severity: 'error', summary: 'Error...!', detail: result.error.error})
            })
        })
    }

}
