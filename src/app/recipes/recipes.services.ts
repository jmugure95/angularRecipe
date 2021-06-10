import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {Recipe} from './recipe.model';
import {Ingredients} from '../shared/ingredients.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()

export class RecipesServices{
  // recipeSelected = new Subject<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
       1,
      'Blueberry acai bowl',
      'A healthy blueberry acai bowl for your heart',
      'https://www.jessicagavin.com/wp-content/uploads/2020/01/acai-bowl-10-1200.jpg',

  [
        new Ingredients('Blueberries', 10),
        new Ingredients('milk', 1)
      ]
    ),
    new Recipe(
      2,
      'Green Matcha',
      'A green smoothie for glowing skin',
      'https://joyfoodsunshine.com/wp-content/uploads/2019/07/green-smoothie-recipe-2.jpg',
      [
        new Ingredients('Kales', 4),
        new Ingredients('Green apples', 0.5)
      ]
    )
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes(): any{
    // return a duplicate of the recipes array
    return this.recipes.slice();
  }

  getRecipeID(recipeId: number): any{
    return this.recipes.find(specificRecipe => specificRecipe.id === recipeId);
  }

  addIngredientsToShoppingList(ingredient: Ingredients[]): any{
    this.slService.addIngredients(ingredient);
  }
}
