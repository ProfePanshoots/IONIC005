import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthfirebaseService } from 'src/app/services/firebase/authfirebase.service';
import { MensajesService } from 'src/app/services/util/mensajes.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  langs: string[] = [];
  idioma!: string;

  constructor(
    private mensajesUtil: MensajesService,
    private authService: AuthfirebaseService,
    private router: Router,
    private translateService: TranslateService
    ) {
      this.langs = this.translateService.getLangs();
     }

  ngOnInit() {
    this.mensajesUtil.mensajeToast('success','Bienvenido',2000,'bottom')
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }

  changeLang(event:any) {
    this.translateService.use(event.detail.value);
  }

}
