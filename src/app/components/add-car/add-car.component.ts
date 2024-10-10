import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Car, CarService } from '../../services/car.service';

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
  newCar: Car = { id: 0, brand: '', model: '' };  // Nouvelle voiture

  constructor(private carService: CarService, private router: Router) {}

  // Méthode pour ajouter une voiture
  onAddCar() {
    this.carService.addCar(this.newCar);  // Ajoute la voiture via le service
    alert('Nouvelle voiture ajoutée : ' + this.newCar.brand + ' ' + this.newCar.model);
    this.router.navigate(['/']);  // Retour à la page principale
  }

  goBack() {
    this.router.navigate(['/']);  // Retourne à la page d'accueil
  }
}

