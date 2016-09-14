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
        console.log(req.body);
        if (req.body["exeid"] === "M0020EQ001") {
            res.json({"results":1,"rows":[{"employee_no":"0039","now_dowork_locations":"深圳"}]});
        } else {
            res.json({"results":1,"rows":[{"employee_no":"0036","idcard":""}]});
        }
    }
}
