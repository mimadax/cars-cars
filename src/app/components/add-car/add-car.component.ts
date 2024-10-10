import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-car',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './add-car.component.html',
  styleUrl: './add-car.component.scss'
})

export class AddCarComponent {
  newCar = { id: 0, brand: '', model: '' };  // Objet de voiture

  constructor(private router: Router) {
    console.log('AddCarComponent initialisé');  // Vérifier si le composant est chargé
  }

  onAddCar() {
    console.log('Bouton ajouter cliqué !');  // Vérifier si l'action est déclenchée
    alert('Nouvelle voiture ajoutée : ' + this.newCar.brand + ' ' + this.newCar.model);
    this.router.navigate(['/']);  // Redirection vers la page principale
  }
}

