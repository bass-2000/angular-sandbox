import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('Dummy recipe', 'This is dummy recipe for test', 'https://avatars.mds.yandex.net/get-pdb/225396/53e5d33c-9fc7-4cb0-a0f1-d661125be390/s1200?webp=false')
  ];

  getRecipes(){
    return this.recipes.slice();
  }
}
