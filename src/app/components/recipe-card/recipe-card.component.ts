import { Component, Input } from '@angular/core';
import { Recipe } from '../../interfaces/recipe';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.css'
})
export class RecipeCardComponent {
  @Input() recipe!: Recipe;

  constructor(private router: Router){}

  viewRecipeDetail(recipeId: number): void {
    this.router.navigate(['recipes', recipeId]);
  }

}
