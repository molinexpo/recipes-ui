import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../interfaces/recipe';

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [],
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent implements OnInit {
  recipe!: Recipe;

  constructor(private route: ActivatedRoute, 
    private recipeService: RecipeService) {}

  ngOnInit(): void {
      const recipeId = Number(this.route.snapshot.paramMap.get('id'));
      this.getRecipe(recipeId);
  }

  getRecipe(idRecipe: number): void {
    this.recipeService.getRecipe(idRecipe).subscribe((recipe) => this.recipe = recipe);
  }
}
