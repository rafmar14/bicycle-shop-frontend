import { Category } from "./Category";
import { Product } from "./Product";

export interface ProductComponent {
    id?: number,
    name: string,
    basePrice: number,
    category: Category,
    product: Product,
    available: boolean
}