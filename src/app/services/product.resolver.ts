import { IProduct } from './../components/models/products';
import { Injectable, inject } from '@angular/core';
import { Router, RouterStateSnapshot, ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { ProductsService } from './products.service';
import { Observable, catchError, EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductResolver implements Resolve<IProduct> {
  constructor( private ProductsService: ProductsService, private router : Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IProduct> {
   
    return this.ProductsService.getProduct(route.params?.['id']).pipe (
      catchError( () => {
        this.router.navigate(['products']);
        return EMPTY
      })
    )
  }
}

