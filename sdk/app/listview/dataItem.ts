export class DataItem {
    public id: number;
    public itemName: string;
    public itemDescription: string;

    constructor(id: number, name: string, description: string) {
        this.id = id;
        this.itemName = name;
        this.itemDescription = description;
    }
}