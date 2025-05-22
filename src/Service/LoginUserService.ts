import { compare } from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User } from '../Entities/User';
import { UserRepository } from '../Repositories/UserRepository';

class LoginUserService {
    private repository: UserRepository;

    constructor(repository: UserRepository) {
        this.repository = repository;
    }

    async exec(user: User) {
        const { email, password } = user.toObject();
        const SECRET = process.env.SECRET || ""
        const { id, password: userPassword } = await this.repository.findByEmail(email);
        
        if (!id || compare(userPassword, password)) {
            return { error: "Invalid credentials", status: 401 };
        }

        return {
            jwt: jwt.sign(
                { id: id },
                SECRET,
                { expiresIn: '7d' }),
            status: 200
        };

    }
}

export default LoginUserService;