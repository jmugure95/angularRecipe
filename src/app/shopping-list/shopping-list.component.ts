import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';

import {Ingredients} from '../shared/ingredients.model';
import {ShoppingListService} from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredients[];
  private igChangedSub: Subscription;

  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.slService.getIngradients();
    this.igChangedSub = this.slService.ingredientChanged.subscribe(
      (ingredient: Ingredients[]) => {
        this.ingredients = ingredient;
      }
    );
  }

  ngOnDestroy(): void {
    this.igChangedSub.unsubscribe();
  }

}
