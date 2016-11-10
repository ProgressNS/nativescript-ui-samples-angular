// >> angular-dataform-person
export class Person {
    public name: string;
    public age: number;
    public email: string;
    public city: string;
    public street: string;
    public streetNumber: number;

    constructor(name: string, age: number, email: string, city: string, street: string, streetNumber: number) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.city = city;
        this.street = street;
        this.streetNumber = streetNumber;
    }
}
// << angular-dataform-person

export class PersonBase {
    public name: string;
    public age: number;
    public birthDate: string;

    constructor(name, age, birthDate) {
        this.name = name;
        this.age = age;
        this.birthDate = birthDate;
    }
}

// >> angular-dataform-person-extended
export class PersonExtended {
    public name: string;
    public age: number;
    public email: string;
    public city: string;
    public street: string;
    public streetNumber: number;
    public country: string;
    public bankName: string;
    public bankId: string;
    public bankVerificationCode: number;
    public bankExpirationDate: string;

    constructor(name: string, age: number, email: string, city: string, street: string, streetNumber: number, country: string, bankName: string, bankId: string, bankVerificationCode: number, bankExpirationDate: string) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.city = city;
        this.street = street;
        this.streetNumber = streetNumber;
        this.country = country;
        this.bankName = bankName;
        this.bankId = bankId;
        this.bankVerificationCode = bankVerificationCode;
        this.bankExpirationDate = bankExpirationDate;
    }
}
// << angular-dataform-person-extended