import { Component, computed, signal } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonActionSheet } from '@ionic/angular/standalone';
import { ActionSheetController, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton],
})
export class HomePage {
  constructor(private actionSheetCtrl: ActionSheetController) { }
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

  // Signal con número positivo mayor a 5
  Positivos = signal(8);

  // Signal con número negativo mayor a -10
  Negativos = signal(-4);

  // Computed para sumar
  suma = computed(() => {
    return this.Positivos() + this.Negativos();
  });

  // Computed para restar
  resta = computed(() => {
    return this.Positivos() - this.Negativos();
  });

  // Computed para multiplicar
  multiplicacion = computed(() => {
    return this.Positivos() * this.Negativos();
  });

  // Computed para dividir
  division = computed(() => {
    return this.Positivos() / this.Negativos();
  });


}
