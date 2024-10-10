import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';  // Le composant principal
import { routes } from './app/app.routes';           // Import des routes

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)  // Fournir le router avec les routes configurées
  ]
}).catch(err => console.error(err));
