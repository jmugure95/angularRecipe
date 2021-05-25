import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Blueberry acai bowl', 'A healthy blueberry acai bowl for your heart', 'https://www.jessicagavin.com/wp-content/uploads/2020/01/acai-bowl-10-1200.jpg'),
    new Recipe('Green Matcha', 'A green smoothie for glowing skin', 'https://joyfoodsunshine.com/wp-content/uploads/2019/07/green-smoothie-recipe-2.jpg')
  ];


  constructor() { }

  ngOnInit(): void {
  }
  onRecipeSelected(recipe: Recipe): any{
    this.recipeWasSelected.emit(recipe);

  }
}
