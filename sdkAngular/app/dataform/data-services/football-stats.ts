export class ChampionsLeagueStat {
    constructor(season, champion, runnerUp, scorers) {
        this.season = season;
        this.champion = champion;
        this.runnerUp = runnerUp;
        this.scorers = scorers;
    }
    public season: string;
    public champion: string;
    public runnerUp: string;
    public scorers: string;
}