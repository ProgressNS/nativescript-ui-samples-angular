export class TicketOrder {
    public movie: number = 123;
    public date: string = "2016-04-06";
    public time: string = "20:00";
    public type: string = "2D";
    public price: number = 9.50;
    public numberOfTickets: number = 2;
    public contactName: string = null;
    public contactPhone: string = null;
    public contactEmail: string = null;
    public agreeTerms: boolean = false;

    constructor() {
    }
}