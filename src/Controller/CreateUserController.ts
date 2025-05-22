import { Request, Response } from "express";
import CreateUserService from "../Service/CreateUserService";
import { User } from "../Entities/User";

class CreateUserController {
    private service: CreateUserService;

    constructor(service: CreateUserService) {
        this.service = service;
    }

    async handle(req: Request, res: Response) {
        const { name, email, password } = req.body;
        const newUser = new User({ name, email, password });
        const { message, error, status } = await this.service.exec(newUser)

        res.status(status).json({ message, error }).send();
    }
}

export default CreateUserController;