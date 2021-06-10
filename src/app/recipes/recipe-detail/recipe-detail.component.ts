import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {Ingredients} from '../../shared/ingredients.model';
import {RecipesServices} from '../recipes.services';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  // id: number;

  constructor(private recipesServices: RecipesServices,
              private route: ActivatedRoute,
              private router: Router ) { }

  ngOnInit(): void {
    // params is an observable
    this.route.params.subscribe(
      (params: Params) => {
        // this.id = params.id;
        this.getProductDetail(Number(params.id));
      }
    );
  }
  onAddToShoppingList(): any{
    this.recipesServices.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  private getProductDetail(productId: number): void {
    this.recipe = this.recipesServices.getRecipeID(productId);
  }

  onEditRecipe(): any {
    // this.recipesServices.getRecipeID(recipeId)
    this.router.navigate(['edit'], {relativeTo: this.route});
  }
}
