export class User {
    public username: string = "";
    public password: string = "";
    public email: string = "";

    constructor() {
    }
}

export class AdvancedUser extends User {
    public phoneNumber: string = "";
    public id: number = 0;

    constructor() {
        super();
    }
}