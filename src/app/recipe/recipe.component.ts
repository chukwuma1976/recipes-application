import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe';
import { NgFor, NgIf } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [NgFor, NgIf, MatCardModule, MatDividerModule, MatProgressBarModule],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css'
})
export class RecipeComponent {

  @Input() recipe? : Recipe;

  displayRecipe: boolean = false;
  displayInstructions: boolean = false;
  displayIngedients: boolean = false;
  
  toggleRecipe() {
    this.displayRecipe = !this.displayRecipe;
  }

  toggleInstructions() {
    this.displayInstructions = !this.displayInstructions;
  }

  toggleIngredents(){
    this.displayIngedients = !this.displayIngedients;
  }

  calculateRating(stars?: number){
    return stars ? (stars * 20) : 0
  }

}
