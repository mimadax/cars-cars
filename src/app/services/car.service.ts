import { Injectable } from '@angular/core';

export interface Car {
  id: number;
  brand: string;
  model: string;
  picture?: string;
}

@Injectable({
  providedIn: 'root'
})

export class CarService {
  private cars: Car[] = [
    { id: 1, brand: 'Toyota', model: 'Corolla', picture: 'car1.jpg' },
    { id: 2, brand: 'Renault', model: 'Mégane', picture: 'car2.jpg' },
    // Ajouter d'autres voitures...
  ];

  getCars() {
    return this.cars;
  }

  // Ajoute une nouvelle voiture
  addCar(car: Car) {
    // Génère un nouvel ID basé sur la dernière voiture
    car.id = this.cars.length > 0 ? Math.max(...this.cars.map(c => c.id)) + 1 : 1;
    this.cars.push(car);
  }

  // Supprime une voiture par ID
  deleteCar(id: number) {
    this.cars = this.cars.filter(car => car.id !== id);
  }
}