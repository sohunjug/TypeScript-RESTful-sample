/// <reference path="_all.d.ts" />
import { Router } from "express";
import { Template } from "./template";
import * as Routes from "./api";

export class Route {
  router: Router;

  private bindType(types: string) {
    switch (types) {
      case "post":
        return this.router.post;
      case "delete":
        return this.router.delete;
      case "put":
        return this.router.put;
      default:
      case "get":
        return this.router.get;
    }
  }

  constructor() {
    this.router = Router();
    
    let apis: { [types: string]: { [index: string]: Template } } = {};
    apis["get"] = {};
    apis["post"] = {};
    apis["get"][""] = apis["get"]["index"] = new Routes.Index("index");
    apis["post"]["login.json"] = new Routes.Login("login");
    apis["post"]["comn-query.json"] = new Routes.UserInfo("userinfo");
    for (let types in apis) {
      for (let api in apis[types]) {
        this.bindType(types).call(this.router, "/" + api, apis[types][api].index.bind(apis[types][api].index));
      }
    }
  }
  
  getRouter() {
    return this.router;
  }
}
