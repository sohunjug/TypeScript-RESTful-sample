/// <reference path="../_all.d.ts" />

import { Request, Response, NextFunction } from "express";
import { Template } from "../template";

export class Login implements Template {
    name: string;
    constructor(template: string) {
        this.name = template;
    }
    public index(req: Request, res: Response, next: NextFunction) {
        res.json({"success": true, "returnmsg": "", "returndata": {"sessionid": "86F2A"}});
    }
}