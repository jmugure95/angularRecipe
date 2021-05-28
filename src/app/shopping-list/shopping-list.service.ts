import {Ingredients} from '../shared/ingredients.model';
import {EventEmitter} from '@angular/core';

export class ShoppingListService {
  ingredientChanged = new EventEmitter<Ingredients[]>();
  private ingredients: Ingredients[] = [
    new Ingredients('apples', 10),
    new Ingredients('apricots', 20)
  ];

  getIngradients(): any{
    return this.ingredients.slice();
  }
  addIngredient(ingredient: Ingredients): any{
    this.ingredients.push(ingredient);
    this.ingredientChanged.emit(this.ingredients.slice());
  }
}
