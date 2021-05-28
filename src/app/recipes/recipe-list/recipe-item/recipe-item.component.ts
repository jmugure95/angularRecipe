import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../../recipe.model';
import {RecipesServices} from '../../recipes.services';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipesServices) { }

  ngOnInit(): void {
  }
  onSelected(): any{
    this.recipeService.recipeSelected.emit(this.recipe);

  }
}
