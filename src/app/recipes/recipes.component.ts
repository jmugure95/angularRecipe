import { Component, OnInit } from '@angular/core';
import {Recipe} from './recipe.model';
import {RecipesServices} from './recipes.services';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipesServices]
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(private recipeService: RecipesServices) {  }

  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe(
      (recipe: Recipe) => {
      this.selectedRecipe = recipe;
      }
    );
  }

}
