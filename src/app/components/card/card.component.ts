import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  newCar = { id: 0, brand: '', model: '' };

  constructor(private router: Router) {}

  // Méthode pour ajouter une nouvelle voiture et rediriger
  onAddCar() {
    // Logique pour ajouter la nouvelle voiture (peut-être via un service)
    // Simuler l'ajout
    alert('Nouvelle voiture ajoutée : ' + this.newCar.brand + ' ' + this.newCar.model);
    this.router.navigate(['/']);  // Retourne à la page principale
  }
}
