import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Car, CarService } from '../../services/car.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tableau',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    FormsModule,
    NgClass
  ],
  templateUrl: './tableau.component.html',
  styleUrl: './tableau.component.scss'
})

export class TableauComponent {
  // Liste des voitures
  cars: Car[] = []; 
  selectedCar: Car | null = null;  // Voiture sélectionnée pour afficher les détails
  searchTerm: string = '';  // Terme de recherche

  constructor(private carService: CarService, private router: Router) {
    this.cars = this.carService.getCars();  // Récupère la liste des voitures via le service
  }

  // Méthode pour afficher les détails d'une voiture
  onClickChangeSelectedCar(id: number) {
    this.selectedCar = this.cars.find(car => car.id === id) || null;
  }

  // Méthode pour supprimer une voiture
  onDeleteCar(id: number) {
    this.carService.deleteCar(id);  // Supprime la voiture via le service
    this.cars = this.carService.getCars();  // Met à jour la liste des voitures
  }

  // Nouvelle méthode pour naviguer vers la page d'ajout de voiture
  goToAddPage() {
    this.router.navigate(['/add']);  // Navigue vers la route "/add"
  }

  // Filtrage des voitures selon le terme de recherche
  get filteredCars() {
    if (this.searchTerm.length < 3) {
      return this.cars;
    }
    return this.cars.filter(car =>
      car.brand.toLowerCase().startsWith(this.searchTerm.toLowerCase()) ||
      car.model.toLowerCase().startsWith(this.searchTerm.toLowerCase())
    );
  }
}
