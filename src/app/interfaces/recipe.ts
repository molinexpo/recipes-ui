import { Difficulty } from "../enums/difficulty";
import { RecipeType } from "../enums/recipe-type";
import { Ingredient } from "./ingredient";

export interface Recipe {
    id: number;
    name: string;
    type: RecipeType;
    difficulty: Difficulty;
    numberOfPeople: number;
    duration: number;
    creationDate: Date;
    ingredients: Ingredient[];
}