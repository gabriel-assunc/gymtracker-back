import { User } from "../Entities/User";

export interface UserRepository {
    findByEmail(email: string): Promise<User | null>;
    createUser(user: User): Promise<Boolean>;
}