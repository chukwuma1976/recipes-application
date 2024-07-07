import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from '../app/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  recipeURL: string = "https://dummyjson.com/recipes/?limit=0"
  baseRecipeURL: string = "https://dummyjson.com/recipes/"

  constructor(private http: HttpClient) { }

  getRecipes(): Observable<Recipe[]>{
    return this.http.get<Recipe[]>(this.recipeURL);
  }

  getRecipeById(id: number): Observable<Recipe>{
    return this.http.get<Recipe>(`${this.baseRecipeURL}${id}`);
  }

  getTags(recipes: Recipe[]){
    const tagsArray = recipes.map(recipe => recipe.tags).flat()
    const setOfTags = new Set(tagsArray);
    return Array.from(setOfTags).sort(); 
  }

  getCuisines(recipes: Recipe[]){
    const cuisineArray = recipes.map(recipe => recipe.cuisine);
    const setOfCuisines = new Set(cuisineArray);
    return Array.from(setOfCuisines).sort();
  }

  getMealType(recipes: Recipe[]){
    const mealTypeArray = recipes.map(recipe => recipe.mealType).flat();
    const setOfMealTypes = new Set(mealTypeArray);
    return Array.from(setOfMealTypes).sort();
  }
}
