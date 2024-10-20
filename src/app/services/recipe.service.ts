import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from '../interfaces/recipe';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class RecipeService {
  url: string = 'http://localhost:8080/recipe'

  constructor(private httpClient: HttpClient) {}

  getRecipes(): Observable<Recipe[]> {
    return this.httpClient.get<Recipe[]>(this.url);
  }

  getRecipe(idRecipe: number): Observable<Recipe> {
    return this.httpClient.get<Recipe>(`${this.url}/${idRecipe}`);
  }
}
