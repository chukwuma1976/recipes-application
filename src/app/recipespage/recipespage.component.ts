import { Component } from '@angular/core';
import { RecipesService } from '../../service/recipes.service';
import { Recipe } from '../recipe';
import { NgFor } from '@angular/common';
import { RecipeComponent } from "../recipe/recipe.component";
import { RecipefilterComponent } from "../recipefilter/recipefilter.component";

@Component({
  selector: 'app-recipespage',
  standalone: true,
  templateUrl: './recipespage.component.html',
  styleUrl: './recipespage.component.css',
  imports: [NgFor, RecipeComponent, RecipefilterComponent]
})
export class RecipespageComponent {

  recipes: Recipe[] = [];
  cuisine: string = '';
  mealType: string = '';
  tag: string = '';

  constructor(private recipesService: RecipesService) {
    this.recipesService.getRecipes().subscribe((data: any) => {
      this.recipes = data.recipes;
    });
  }

  filterType(mealType: string) {
    this.mealType = mealType
    this.filterRecipes(this.mealType, this.tag, this.cuisine)
  }

  filterTag(mealTag: string) {
    this.tag = mealTag;
    this.filterRecipes(this.mealType, this.tag, this.cuisine)
  }

  filterCuisine(mealCuisine: string) {
    this.cuisine = mealCuisine;
    this.filterRecipes(this.mealType, this.tag, this.cuisine)
  }

  filterRecipes(mealType: string, mealTag: string, mealCuisine: string) {
    this.recipesService.getRecipes().subscribe((data: any) => {
      this.recipes = data.recipes;
      if (mealType !=="")
        this.recipes = this.recipes.filter(recipe => recipe.mealType.includes(mealType));
      if (mealTag !=='')
        this.recipes = this.recipes.filter(recipe => recipe.tags.includes(mealTag));
      if (mealCuisine !=='')
        this.recipes = this.recipes.filter(recipe => recipe.cuisine === mealCuisine);
    });
  }

}
