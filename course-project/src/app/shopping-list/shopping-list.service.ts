import {Ingredient} from '../shared/ingredient.model';
import {EventEmitter} from '@angular/core';

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
private ingredients: Ingredient[] = [
  new Ingredient('Apples', 99),
  new Ingredient('Tomatoes', 99)
];

getIngredients(){
  return this.ingredients.slice();
}

addIngredient(ingredient: Ingredient){
  this.ingredients.push(ingredient);
  this.ingredientsChanged.emit(this.ingredients.slice());
}
}
