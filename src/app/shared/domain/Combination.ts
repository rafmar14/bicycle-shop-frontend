import { ProductComponent } from "@/shared/domain/ProductComponent";

export interface Combination {
    id?: number,
    compA: ProductComponent,
    compB: ProductComponent,
    compatible: boolean,
    priceAdjustment: number
}