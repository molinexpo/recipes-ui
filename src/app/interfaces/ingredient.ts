import { IngredientType } from "../enums/ingredient-type";
import { QuantityUnit } from "../enums/quantity-unit";

export interface Ingredient {
    id: number;
    name: string;
    quantity: number;
    unit: QuantityUnit;
    type: IngredientType;
}