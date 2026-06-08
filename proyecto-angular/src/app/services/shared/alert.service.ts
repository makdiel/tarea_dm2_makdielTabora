import { inject, Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular/standalone';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  //injecto la dependencia AlertController para mostrar las alertas 3era forma de mostrar alertas
private readonly _alertController: AlertController = inject(AlertController);
alertButtons = [
  {
    text: 'Ok',
    role: 'confirm',
    handler: () =>{
      console.log('Alert Confirmed')
    }
  },
  {
    text:'Canel',
    role:'cancel',
    handler:() => {
      console.log('Alert cancelled')
    },

  }
];
//Mostrar la alertas usando el controlador de alertas
  async showAlert(message: string,header:string , subheader: string): Promise<void> {
    const alert = this._alertController.create({
      header:header,
      subHeader:subheader,
      message:message,
      buttons: this.alertButtons,
    });
    (await alert).present();
  }

}
