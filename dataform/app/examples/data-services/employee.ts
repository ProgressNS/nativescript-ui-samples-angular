// >> angular-dataform-employee
export class Employee {
    public name: string;
    public phone: string;
    public birthDate: Date;
    public employeeId: number;

    constructor(name: string, phone: string, birthDate: Date, employeeId: number) {
        this.name = name;
        this.phone = phone;
        this.birthDate = birthDate;
        this.employeeId = employeeId;
    }
}
// << angular-dataform-employee