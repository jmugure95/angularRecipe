import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {Ingredients} from '../../shared/ingredients.model';
import {RecipesServices} from '../recipes.services';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;

  constructor(private recipesServices: RecipesServices,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.getProductDetail(Number(params.id));
      }
    );
  }


  onAddToShoppingList(): any{
    // this.recipesServices.getRecipes();
    this.recipesServices.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  private getProductDetail(productId: number): void {
    this.recipe = this.recipesServices.getRecipeDetail(productId);
  }
}
