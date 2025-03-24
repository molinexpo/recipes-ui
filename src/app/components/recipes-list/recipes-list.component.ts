import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../interfaces/recipe';
import { RecipeService } from '../../services/recipe.service';
import { catchError, EMPTY } from 'rxjs';
import { RecipeCardComponent } from '../recipe-card/recipe-card.component';
import { SidenavComponent } from '../sidenav/sidenav.component';

@Component({
  selector: 'app-recipes-list',
  standalone: true,
  imports: [RecipeCardComponent, SidenavComponent],
  templateUrl: './recipes-list.component.html',
  styleUrl: './recipes-list.component.css'
})

export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
      this.getRecipes();
  }
/*
  getRecipes() {
    this.recipeService.getRecipes().subscribe((data: Recipe[]) => {this.recipes = data})
  }
*/
  getRecipes() {
    this.recipeService.getRecipes()
    .pipe(
      catchError((error) => {
        console.log(error);
        return EMPTY;
      })
    ).subscribe((data: Recipe[]) => {this.recipes = data})
  }
}
