import { Component, OnInit } from '@angular/core';
import {Recipe} from './recipe.model';
import {RecipesServices} from './recipes.services';
import {Ingredients} from '../shared/ingredients.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipesServices]
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor() {  }
  // constructor(private recipeService: RecipesServices) {  }

  ngOnInit(): void {
    // this.recipeService.recipeSelected.subscribe(
    //   (recipe: Recipe) => {
    //   this.selectedRecipe = recipe;
    //   }
    // );
  }
}
