import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Ingredients} from '../../shared/ingredients.model';
import {ShoppingListService} from '../shopping-list.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  shoppingList: FormGroup;
  @ViewChild('ingredientName') ingredientNameRef: ElementRef;
  @ViewChild('ingredientAmount') ingredientAmountRef: ElementRef;

  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
    this.shoppingList = new FormGroup({
      name: new FormControl(null, Validators.required),
      amount: new FormControl(null, Validators.pattern(/^[0-9]\d*$/))
    });
  }

  // addItem(): any{
  //   const newIngName = this.ingredientNameRef.nativeElement.value;
  //   const newIngAmt = this.ingredientAmountRef.nativeElement.value;
  //   const newIngredient = new Ingredients(newIngName, newIngAmt);
  //   this.slService.addIngredient(newIngredient);
  //
  // }
  onSubmit(): any{
    console.log(this.shoppingList);
  }
}
