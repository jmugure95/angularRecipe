import { EventEmitter } from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredients} from '../shared/ingredients.model';

export class RecipesServices{
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Blueberry acai bowl',
      'A healthy blueberry acai bowl for your heart',
      'https://www.jessicagavin.com/wp-content/uploads/2020/01/acai-bowl-10-1200.jpg',
      [
        new Ingredients('Blueberries', 10),
        new Ingredients('milk', 1)
      ]
    ),
    new Recipe(
      'Green Matcha',
      'A green smoothie for glowing skin',
      'https://joyfoodsunshine.com/wp-content/uploads/2019/07/green-smoothie-recipe-2.jpg',
      [
        new Ingredients('Kales', 4),
        new Ingredients('Green apples', 0.5)
      ]
    )
  ];

  getRecipes(): any{
    // return a duplicate of the recipes array
    return this.recipes.slice();
  }
}
