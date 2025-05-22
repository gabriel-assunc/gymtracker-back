import { Request, Response } from "express";
import LoginUserService from "../Service/LoginUserService";
import { User } from "../Entities/User";

class LoginUserController {
    private service: LoginUserService;

    constructor(service: LoginUserService) {
        this.service = service;
    }

    async handle(req: Request, res: Response) {
        const { email, password } = req.body;
        const userToLogin = new User({ email, password });
        const { jwt, error, status } = await this.service.exec(userToLogin);
        res.status(status).json({ jwt, error }).send();
    }
}

export default LoginUserController;