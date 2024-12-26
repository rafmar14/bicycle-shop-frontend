import { Component } from "@angular/core";
import { Customer } from "./Customer";
import { Combination } from "./Combination";

export interface Order {
    id: number,
    customer: Customer,
    components: Component[],
    combinations: Combination[]
}