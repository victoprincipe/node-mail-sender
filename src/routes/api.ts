import express, { Router, Request, Response } from "express";
import { UserController } from "../controller/user-controller";

class ApiRoutes {
  private router!: Router;
  private userController!: UserController;

  constructor() {
    this.userController = new UserController();
    this.router = express.Router();

    this.router.post("/subscribe", this.userController.subscribeUser);

    this.router.post("/unsubscribe", this.userController.unsubscribeUser);
  }

  getRoutes() {
    return this.router;
  }
}

export { ApiRoutes };
