import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [NgFor, RouterModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  products: any[] = [];
  constructor(private store: ProductsService) {}
  ngOnInit(): void {
    this.store
      .getAllProducts()
      .subscribe((products) => (this.products = products));
  }
}
