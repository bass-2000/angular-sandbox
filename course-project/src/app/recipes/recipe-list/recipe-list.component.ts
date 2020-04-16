import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Dummy recipe', 'This is dummy recipe for test', 'https://avatars.mds.yandex.net/get-pdb/225396/53e5d33c-9fc7-4cb0-a0f1-d661125be390/s1200?webp=false')
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  onRecipeSelected(recipeEl: Recipe) {
  this.recipeWasSelected.emit(recipeEl);
  }
}
