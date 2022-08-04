import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipe.model";

export class RecipeService {
  recipesChanged = new Subject<Recipe[]>;

  private recipes: Recipe[] = [
    new Recipe(
      'Juicy Burguer', 
      'Yummy', 
      'https://i.pinimg.com/736x/96/1d/74/961d74148ad5ab689c75d84c19dc8897.jpg',
      [
        new Ingredient('Meat',1),
        new Ingredient('French Fries',20)
      ]),
      new Recipe(
        'I dont know wth is that', 
        'Some description xd', 
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

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }
  
  updateRecipe(index: number, newRecipe: Recipe){
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number){
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}