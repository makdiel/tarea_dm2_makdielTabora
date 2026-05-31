import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { provideHttpClient,withFetch } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
      provideRouter(routes, withPreloading(PreloadAllModules)),
     provideHttpClient(withFetch()),
      // Es el provider del Http Client. El withFetch() es para usar el fetch API en lugar de XMLHttpRequest.

    provideRouter(routes, withPreloading(PreloadAllModules)), provideFirebaseApp(() => initializeApp({ projectId: "wallet-mak-app", appId: "1:553145016498:web:e38bf2e07260309443e9ab", storageBucket: "wallet-mak-app.firebasestorage.app", apiKey: "AIzaSyDsLUPYla6fQX6fbg8Zc4s-_yCBdJbKnh8", authDomain: "wallet-mak-app.firebaseapp.com", messagingSenderId: "553145016498", projectNumber: "553145016498", version: "2" })), provideMessaging(() => getMessaging()),
  ],
});
