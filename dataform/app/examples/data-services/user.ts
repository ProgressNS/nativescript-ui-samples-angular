export class BaseUser {
    public username: string = "";
    public password: string = "";

    constructor() {
    }
}

export class User extends BaseUser {
    public email: string = "";

    constructor() {
        super();
    }
}

export class RegisteringUser extends BaseUser {
    public password2: string = "";

    constructor() {
        super();
    }
}

export class AdvancedUser extends User {
    public phoneNumber: string = "";
    public id: number = 0;
    public pin: string = "";
    public agreeTerms: boolean = false;

    constructor() {
        super();
    }
}

export class SuperUser extends User {
    public city: string;
    public country: string;
    public streetName: string;
    public streetNumber: number;
    public postalCode: number;
    public additionalInfo: string;
    public phone: string;
    public gender: string;
    public firstName: string;
    public lastName: string;
    public lastLoginDate: Date;
    public lastLoginTime: Date;
    public company: string;
    public webSite: string;

    constructor(firstName, lastName, username, password, email, lastLoginDate, lastLoginTime, gender, company, website, phone, country, city, streetName, streetNumber, postalCode, additionalInfo) {
        super();

        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.password = password;
        this.email = email;
        this.lastLoginDate = lastLoginDate;
        this.lastLoginTime = lastLoginTime;
        this.gender = gender;
        this.company = company;
        this.webSite = website;
        this.phone = phone;
        this.country = country;
        this.city = city;
        this.streetName = streetName;
        this.streetNumber = streetNumber;
        this.postalCode = postalCode;
        this.additionalInfo = additionalInfo;
    }

    toString() {
        return "First Name: " + this.firstName + "\n" +
            "Last Name: " + this.lastName + "\n" +
            "Username: " + this.username + "\n" +
            "Password: " + "*".repeat(this.password.length) + "\n" +
            "E-mail: " + this.email + "\n" +
            "LastLoginDate: " + this.lastLoginDate.toDateString() + "\n" +
            "LastLoginTime: " + this.lastLoginTime.toTimeString() + "\n" +
            "Gender: " + this.gender + "\n" +
            "Company: " + this.company + "\n" +
            "WebSite: " + this.webSite + "\n" +
            "Phone: " + this.phone + "\n" +
            "Country: " + this.country + "\n" +
            "City: " + this.city + "\n" +
            "Street Name: " + this.streetName + "\n" +
            "Street Number: " + this.streetNumber + "\n" +
            "Postal Code: " + this.postalCode + "\n" +
            "Additional Info: " + this.additionalInfo + "\n";
    }
}