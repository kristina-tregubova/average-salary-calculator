export class Indices {
    x1: number = null;
    x2: number = null;
    x3: number = null;
    x4: number = null;
    x5: number = null;

    // write only specified fields
    constructor(obj: any) {
        for (const [key, value] of Object.entries(obj)) {
            if (this.hasOwnProperty(key)) this[key] = value;
        }
    }
}