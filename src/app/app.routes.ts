import { Routes } from '@angular/router';
import { RecipesListComponent } from './components/recipes-list/recipes-list.component';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';

export const routes: Routes = [
    {path: 'recipes', component: RecipesListComponent},
    {path: 'recipes/:id', component: RecipeDetailComponent},
    {path: '', redirectTo: '/recipes', pathMatch: 'full'}
];
