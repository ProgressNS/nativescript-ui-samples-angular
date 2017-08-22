import { Injectable } from "@angular/core";
import { ChampionsLeagueStat } from "../../data-services/football-stats";


@Injectable()
export class LeagueStatsService {
    private _stats: ChampionsLeagueStat[];

    constructor() {
        this._stats = [
            new ChampionsLeagueStat("2007-2008", "Manchester United", "Chelsea", "Christiano Ronaldo (8)\nLionel Messi (6)\nFernando Torres (6)"),
            new ChampionsLeagueStat("2008-2009", "Barcelona", "Manchester United", "Lionel Messi (9)\nSteven Gerrard (7)\nMiroslav Klose (7)"),
            new ChampionsLeagueStat("2009-2010", "Internazionale", "Bayern Munich", "Lionel Messi (8)\nCristiano Ronaldo (7)\nIvica Olić (7)"),
            new ChampionsLeagueStat("2010-2011", "Barcelona", "Manchester United", "Lionel Messi (12)\nMario Gómez (8)\nSamuel Eto'o (8)"),
            new ChampionsLeagueStat("2011-2012", "Chelsea", "Bayern Munich", "Lionel Messi (14)\nMario Gómez (12)\nCristiano Ronaldo (10)"),
            new ChampionsLeagueStat("2012-2013", "Bayern Munich", "Borussia Dortmund", "Christiano Ronaldo (12)\nRobert Lewandowski (10)\nBurak Yılmaz (8)"),
            new ChampionsLeagueStat("2013-2014", "Real Madrid", "Atlético Madrid", "Christiano Ronaldo (17)\nZlatan Ibrahimović (10)\nDiego Costa (8)"),
            new ChampionsLeagueStat("2014-2015", "Barcelona", "Juventus", "Neymar (10)\nCristiano Ronaldo (10)\nLionel Messi (10)"),
            new ChampionsLeagueStat("2015-2016", "Real Madrid", "Atlético Madrid", "Christiano Ronaldo (16)\nRobert Lewandowski (9)\nLuis Suárez (8)"),
            new ChampionsLeagueStat("2016-2017", "Real Madrid", "Juventus", "Christiano Ronaldo (12)\nLionel Messi (9)\nEdinson Cavani (8)"),
        ];
    }

    getAll() {
        return this._stats;
    }
}