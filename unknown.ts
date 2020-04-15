let ua: string;

let ux: any;
ua = ux; // compiles
ux = ua; // compiles

let uy: unknown;
uy = ua; // compiles
// ua = uy; // Does not compile