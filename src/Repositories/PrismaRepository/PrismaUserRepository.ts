import { db } from "../../config/db.server";
import { UserRepository } from "../UserRepository";
import { User } from "../../Entities/User";

export class PrismaUserRepository implements UserRepository {
    async findByEmail(email: string): Promise<User | null> {
        const user = new User(await db.user.findUnique({
            where: { email }
        }))
        return user
    }

    async createUser(user: User): Promise<Boolean> {
        const { id, email, name, password } = user.toObject()
        const addReturn = await db.user.create({
            data: { id, email, name, password },
        });

        return !!addReturn
    }
}