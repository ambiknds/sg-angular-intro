import { Component } from '@angular/core';
import {ProductComponent} from './product/product.component'
import { CategoryComponent } from './category/category.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductComponent, CategoryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Ambition';
  company = "Kompiwtor"
  imgUrl="https://v17.angular.io/assets/images/logos/angular/logo-nav@2x.png"
  inpType="password"

  printData(){
    console.log("Hello there Angular!")
  }

  isAvailable=false //true or false

  // proName="samsung M51"
}
