import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Ingredients} from '../../shared/ingredients.model';
import {ShoppingListService} from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('ingredientName') ingredientNameRef: ElementRef;
  @ViewChild('ingredientAmount') ingredientAmountRef: ElementRef;

  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
  }

  addItem(): any{
    const newIngName = this.ingredientNameRef.nativeElement.value;
    const newIngAmt = this.ingredientAmountRef.nativeElement.value;
    const newIngredient = new Ingredients(newIngName, newIngAmt);
    this.slService.addIngredient(newIngredient);

  }
}
