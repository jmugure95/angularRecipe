import {Subject} from 'rxjs';
import {Ingredients} from '../shared/ingredients.model';
import {EventEmitter} from '@angular/core';

export class ShoppingListService {
  // ingredientChanged = new EventEmitter<Ingredients[]>();
  ingredientChanged = new Subject<Ingredients[]>();
  private ingredients: Ingredients[] = [
    new Ingredients('apples', 10),
    new Ingredients('apricots', 20)
  ];

  getIngradients(): any{
    return this.ingredients.slice();
  }
  addIngredient(ingredient: Ingredients): any{
    this.ingredients.push(ingredient);
    this.ingredientChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredients[]): any {
    this.ingredients.push(...ingredients);
    this.ingredientChanged.next(this.ingredients.slice());
    }
}
