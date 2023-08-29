import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { Products } from '../products';

@Component({
  selector: 'app-listproduits',
  templateUrl: './listproduits.component.html',
  styleUrls: ['./listproduits.component.css']
})
export class ListproduitsComponent {

  products: Products[] = [];
  
  constructor (public prser:ProductsService){}
  ngOnInit():void{
this.prser.getallArticle().subscribe((data:Products[])=>
this.products=data)

  }

}
