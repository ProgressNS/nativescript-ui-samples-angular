export class CitiesList {
    public city1: string = "Sydney";
    public city2: string = "Sydney";
    public city3: number = 6985;
    public city4: number = 6985;
    public city5: number = 6985;

    toString(): String {
        return "city1: " + this.city1 + "\n" + 
            "city2: " + this.city2 + "\n" +
            "city3: " + this.city3 + "\n" +
            "city4: " + this.city4 + "\n" +
            "city5: " + this.city5;
    }
}