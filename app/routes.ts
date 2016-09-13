/// <reference path="_all.d.ts" />
import { Router } from "express";
import { Template } from "./template";
import * as Routes from "./api";

export class Route {
  router: Router;
  constructor() {
    this.router = Router();

    let apis: { [ index: string ]: Template } = {};
    apis[""] = apis["index"] = new Routes.Index("index");
    apis["login.json"] = new Routes.Login("login");
    apis["comn-query.json"] = new Routes.UserInfo("userinfo");
    for (let api in apis) {
      this.router.get("/" + api, apis[api].index.bind(apis[api].index));
    }
    //this.router.get("/", apis["index"].index.bind(apis["index"].index));
  }

  getRouter() {
    return this.router;
  }
}
