import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipesService } from '../../service/recipes.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-recipefilter',
  standalone: true,
  imports: [NgFor],
  templateUrl: './recipefilter.component.html',
  styleUrl: './recipefilter.component.css'
})
export class RecipefilterComponent {

  changeType(event: Event) {
    const type = (event.target as HTMLSelectElement).value;
    this.typeEvent.emit(type);
  }
  changeTag(event: Event) {
    const tag = (event.target as HTMLSelectElement).value;
    this.tagEvent.emit(tag);
  }
  changeCuisine(event: Event) {
    const cuisine = (event.target as HTMLSelectElement).value;
    this.cuisineEvent.emit(cuisine);
  }

  @Output() cuisineEvent = new EventEmitter<string>();
  @Output() tagEvent = new EventEmitter<string>();
  @Output() typeEvent = new EventEmitter<string>();

  recipes: Recipe[] = [];
  cuisines: string[] = [];
  tags: string[] = [];
  types: string[] = []

  constructor(private recipesService: RecipesService) {
    this.recipesService.getRecipes().subscribe((data: any) => {
      this.recipes = data.recipes
      this.cuisines = this.recipesService.getCuisines(data.recipes);
      this.tags = this.recipesService.getTags(data.recipes);
      this.types = this.recipesService.getMealType(data.recipes);
    });
  }

}
