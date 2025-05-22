
type NewUser = {
    id?: string;
    name?: string;
    email?: string;
    password?: string;
}

export class User {
    private props: NewUser;

    constructor(props: NewUser) {
        this.props = { ...props }
    }

    get id() {
        return this.props.id;
    }

    get name() {
        return this.props.name;
    }

    get email() {
        return this.props.email;
    }

    get password() {
        return this.props.password;
    }

    toObject() {
        return {
            id: this.props.id,
            name: this.props.name,
            email: this.props.email,
            password: this.props.password
        }
    }
}