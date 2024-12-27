import { ProductComponent } from "./ProductComponent";

export interface Category {
    id?: number,
    name: string,
    components: ProductComponent[]
}