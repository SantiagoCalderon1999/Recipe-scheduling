import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipe.model";

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Juicy Burguer', 
      'This is simply a test', 
      'https://i.pinimg.com/736x/96/1d/74/961d74148ad5ab689c75d84c19dc8897.jpg',
      [
        new Ingredient('Meat',1),
        new Ingredient('French Fries',20)
      ]),
      new Recipe(
        'I dont know wth is that', 
        'This is simply a test', 
        'https://live.staticflickr.com/65535/51129289518_94009afae3_b.jpg',
        [
          new Ingredient('Bread',2),
          new Ingredient('Butter',5)
        ])
  ];

  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(index: number){
    return this.recipes.slice()[index];
  }


}