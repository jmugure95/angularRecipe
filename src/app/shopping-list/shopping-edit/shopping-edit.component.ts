import {Component, ElementRef, OnInit, ViewChild, EventEmitter, Output} from '@angular/core';
import {Ingredients} from '../../shared/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('ingredientName') ingredientNameRef: ElementRef;
  @ViewChild('ingredientAmount') ingredientAmountRef: ElementRef;
  @Output() ingredientAdded =  new EventEmitter<Ingredients>();

  constructor() { }

  ngOnInit(): void {
  }

  addItem(): any{
    const newIngName = this.ingredientNameRef.nativeElement.value;
    const newIngAmt = this.ingredientAmountRef.nativeElement.value;
    const newIngredient = new Ingredients(newIngName, newIngAmt);
    this.ingredientAdded.emit(newIngredient);
  }
}
