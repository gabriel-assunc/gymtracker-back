import { User } from "../Entities/User";
import { UserRepository } from "../Repositories/UserRepository";

class CreateUserService {
    private userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    async exec(user: User) {
        const { name, email, password } = user.toObject();
        const { id: userId } = await this.userRepository.findByEmail(email);
        if (userId) return { error: "User already exists", status: 400 };

        const newUserWasAdded = await this.userRepository.createUser(new User({ name, email, password }));

        if (!newUserWasAdded) return { error: "Error creating user", status: 500 };
        return { message: "Success creating user", status: 201 };
    }
}

export default CreateUserService;