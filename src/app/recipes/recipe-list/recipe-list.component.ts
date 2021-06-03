import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipesServices} from '../recipes.services';
import {Router} from '@angular/router';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  constructor(
    private recipeService: RecipesServices,
    private route: Router
    ) { }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

  madness(recipeEl: Recipe): void {
    this.route.navigate(['/recipes', recipeEl.id ]);
  }
}
