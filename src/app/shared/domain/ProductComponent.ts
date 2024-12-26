import { Category } from "./Category";
import { Product } from "./Product";

export interface ProductComponent {
    id?: number,
    name: string,
    fieldType: string,
    basePrice: number,
    category: Category,
    product: Product
}