/// <reference path="../_all.d.ts" />

import { Request, Response, NextFunction } from "express";
import { Template } from "../template";

export class Index implements Template {
    name: string;
    constructor(template: string) {
        this.name = template;
    }
    public index(req: Request, res: Response, next: NextFunction) {
        //render page
        res.render(this.name);
    }
}