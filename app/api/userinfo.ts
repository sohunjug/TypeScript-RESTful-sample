/// <reference path="../_all.d.ts" />

import { Request, Response, NextFunction } from "express";
import { Template } from "../template";

export class UserInfo implements Template {
    name: string;
    constructor(template: string) {
        this.name = template;
    }
    public index(req: Request, res: Response, next: NextFunction) {
        //render page
        res.json({"results":1,"rows":[{"employee_no":"00369","realname":"胡文琦","idcard":"","phone":"18688989717","login_name":"huwq"}]});
    }
}