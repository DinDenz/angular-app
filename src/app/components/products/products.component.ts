import { Component, OnInit } from '@angular/core';
import { IProduct } from '../models/products';
import { Subscription } from 'rxjs';
import { ProductsService } from '../../services/products.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: IProduct[] = [];
  productsSubscription: Subscription;
  canEdit: boolean = true;

  constructor(private ProductsService: ProductsService, public dialog: MatDialog ) {}

  ngOnInit(): void {
    this.productsSubscription = this.ProductsService.getProducts().subscribe(
      (data) => {
        this.products = data;
      }
    );
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogBoxComponent);
  }
  ngOnDestroy() {
    if (this.productsSubscription) this.productsSubscription.unsubscribe();
  }
}
