import { Construct } from "./construct";

export class Coordinates {
    public x: number;
    public y: number;
    public z?: number = 0;

    constructor(init: Construct<Coordinates>){
        Object.assign(this, init)
    }
}