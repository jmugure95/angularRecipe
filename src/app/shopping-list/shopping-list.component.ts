import { Component, OnInit } from '@angular/core';
import {Ingredients} from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredients[] = [
    new Ingredients('apples', 10),
    new Ingredients('apricots', 20)
  ];

  constructor() { }

  ngOnInit(): void {
  }
  onIngredientAdded(ingredient: Ingredients): any{
    this.ingredients.push(ingredient);
  }
}
