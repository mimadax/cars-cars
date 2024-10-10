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
    { id: 1, brand: 'Toyota', model: 'Corolla', picture: 'https://picsum.photos/200?random=1' },
    { id: 2, brand: 'Renault', model: 'Mégane', picture: 'https://picsum.photos/200?random=2' },
    { id: 3, brand: 'Peugeot', model: '208', picture: 'https://picsum.photos/200?random=3' },
    { id: 4, brand: 'Ford', model: 'Focus', picture: 'https://picsum.photos/200?random=4' },
    { id: 5, brand: 'Volkswagen', model: 'Golf', picture: 'https://picsum.photos/200?random=5' },
    { id: 6, brand: 'Honda', model: 'Civic', picture: 'https://picsum.photos/200?random=6' },
    { id: 7, brand: 'BMW', model: 'Series 3', picture: 'https://picsum.photos/200?random=7' },
    { id: 8, brand: 'Mercedes', model: 'A-Class', picture: 'https://picsum.photos/200?random=8' },
    { id: 9, brand: 'Audi', model: 'A4', picture: 'https://picsum.photos/200?random=9' },
    { id: 10, brand: 'Nissan', model: 'Qashqai', picture: 'https://picsum.photos/200?random=10' }
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