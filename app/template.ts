/// <reference path="_all.d.ts" />
"use strict";

import { Request, Response, NextFunction } from "express";

export interface Template {
    name: string;
    index(req: Request, res: Response, next: NextFunction);
}
