import { Router } from "express";
import { LOGIN, REGISTER_USER } from "../../URL/URL";
import LoginUserController from "../../Controller/LoginUserController";
import CreateUserController from "../../Controller/CreateUserController";
import CreateUserService from "../../Service/CreateUserService";
import { PrismaUserRepository } from "../../Repositories/PrismaRepository/PrismaUserRepository";
import LoginUserService from "../../Service/LoginUserService";

interface PublicRoutesController {
    loginUserController: LoginUserController;
    createUserController: CreateUserController;
}
class PublicRoutes {
    private controllers: PublicRoutesController;

    constructor() {
        const prismaUserRepository = new PrismaUserRepository();

        const createUserService = new CreateUserService(prismaUserRepository);
        const loginUserService = new LoginUserService(prismaUserRepository);

        const createUserController = new CreateUserController(createUserService);
        const loginUserController = new LoginUserController(loginUserService);

        this.controllers = {
            loginUserController,
            createUserController
        }
    }

    setRoutes(router: Router) {
        const {
            loginUserController,
            createUserController
        } = this.controllers;

        router.post(LOGIN, (req, res) => loginUserController.handle(req, res));
        router.post(REGISTER_USER, (req, res) => createUserController.handle(req, res));
    }
}

export default PublicRoutes;