import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
@Injectable(

)
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  //property:class recipe
  private recipes:Recipe[]=[
    new Recipe('Burger','A humberger with a rim of lettuce sitting on a black plate against a black backgound',
  'https://upload.wikimedia.org/wikipedia/commons/6/62/NCI_Visuals_Food_Hamburger.jpg',
  [
    new Ingredient('meal',1),
    new Ingredient('tomato',2),
  ]),
  new Recipe('Hello Kitty Give Away','the doll is chubby and cute'+
  'give away when you eaten in my restoran','../src/app/img/logo.jpg',
[
  new Ingredient('hello kitty',1),
  new Ingredient('melody',3),
  new Ingredient('spiderman',1),
  new Ingredient('upin ipin',1)
]),  
];

  getRecipes(){
    return this.recipes.slice();
  }
  //tambahkan method addIngredientsShoppingList dengan parameter ingredient[]
  addIngredientsShoppingList(ingredients: Ingredient[]){
    this.slsService.addIngredients(ingredients);
  }
  //tambahkan parameter pada construktor
constructor(private slsService: ShoppingListService) { }

}