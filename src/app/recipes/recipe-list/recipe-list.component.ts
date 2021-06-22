import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipesServices} from '../recipes.services';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  constructor(private recipeService: RecipesServices,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

  onShowRecipeById(recipeEl: Recipe): void {
    this.router.navigate(['/recipes', recipeEl.id ]);
  }

  onAddNewRecipe(): any{
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
