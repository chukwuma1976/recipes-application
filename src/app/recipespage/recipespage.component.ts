import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../service/recipes.service';
import { Recipe } from '../recipe';
import { NgFor } from '@angular/common';
import { RecipeComponent } from "../recipe/recipe.component";

@Component({
    selector: 'app-recipespage',
    standalone: true,
    templateUrl: './recipespage.component.html',
    styleUrl: './recipespage.component.css',
    imports: [NgFor, RecipeComponent]
})
export class RecipespageComponent implements OnInit {

  recipes : Recipe[] = [];

  constructor(private recipesService: RecipesService){
  }

  ngOnInit(){
    this.recipesService.getRecipes().subscribe((data: any) => this.recipes = data.recipes);
  }

}
