import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface Car {
  id: number;
  brand: string;
  model: string;
}

@Component({
  selector: 'app-tableau',
  standalone: true,
  imports: [
    NgFor,
    FormsModule
  ],
  templateUrl: './tableau.component.html',
  styleUrl: './tableau.component.scss'
})

export class TableauComponent {
  // Liste des voitures
  cars: Car[] = [
    { id: 1, brand: 'Toyota', model: 'Corolla' },
    { id: 2, brand: 'Renault', model: 'Mégane' },
    { id: 3, brand: 'Peugeot', model: '208' }
  ];

  selectedCar: Car | null = null;  // Voiture sélectionnée pour afficher les détails
  searchTerm: string = '';  // Terme de recherche

  constructor(private router: Router) {}

  goToAddPage() {
    this.router.navigate(['/add']);
  }
  // Méthode pour sélectionner une voiture et afficher ses détails
  onClickChangeSelectedCar(id: number) {
    this.selectedCar = this.cars.find(car => car.id === id) || null;
  }

  // Méthode pour supprimer une voiture
  onDeleteCar(id: number) {
    this.cars = this.cars.filter(car => car.id !== id);
  }

  // Filtrage des voitures selon le terme de recherche
  get filteredCars() {
    if (this.searchTerm.length < 3) {
      return this.cars;  // Retourne toutes les voitures si le terme est trop court
    }
    return this.cars.filter(car =>
      car.brand.toLowerCase().startsWith(this.searchTerm.toLowerCase()) ||
      car.model.toLowerCase().startsWith(this.searchTerm.toLowerCase())
    );
  }
}
