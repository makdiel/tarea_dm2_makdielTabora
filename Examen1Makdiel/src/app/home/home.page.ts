import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonActionSheet } from '@ionic/angular/standalone';
import { ActionSheetController, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonActionSheet, IonHeader, IonToolbar, IonTitle, IonContent, IonButton],
})
export class HomePage {
 constructor(private actionSheetCtrl: ActionSheetController) {}
 async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Seleccion una opcion:',
      buttons: [
        {
          text: 'Editar Perfil',
          role: 'destructive',
          data: {
            action: 'update',
          },
        },
        {
          text: 'Cambiar Contraseña',
          data: {
            action: 'share',
          },
        },
        {
          text: 'Cerrar Sesion',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    await actionSheet.present();
  }
}
