import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private data: any[] = [
    { id: 1, name: 'Piano', price: 5000 },
    { id: 2, name: 'Guitar', price: 500 },
    { id: 3, name: 'Drums', price: 1000 },
  ];
  getAllProducts() {
    return of(this.data);
  }

  getProduct(id: number) {
    return of(this.data.find((p) => p.id === id));
  }
  constructor() {}
}
