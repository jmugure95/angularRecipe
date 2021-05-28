import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipesServices} from '../recipes.services';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  constructor(private recipeService: RecipesServices) { }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

}
