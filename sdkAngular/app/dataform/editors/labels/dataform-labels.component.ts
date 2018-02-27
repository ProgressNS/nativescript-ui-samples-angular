import { Component, OnInit, ViewChild } from "@angular/core";
import { DataFormEventData, EntityProperty, RadDataForm } from "nativescript-ui-dataform"
import { Observable } from "tns-core-modules/data/observable";

import { ChampionsLeagueStat } from "../../data-services/football-stats";
import { LeagueStatsService } from "./league-stats.service";

@Component({
    moduleId: module.id,
    selector: "tk-dataform-labels",
    templateUrl: "dataform-labels.component.html",
    providers: [LeagueStatsService],
})
export class DataFormLabelsComponent extends Observable implements OnInit {
    private _stats: ChampionsLeagueStat[];
    private _statNumber = 9;
    private _statsCount = 10;

    public currentStat: ChampionsLeagueStat;
    public canGoUp: boolean;
    public canGoDown: boolean;

    constructor(private leagueStatsService: LeagueStatsService) {
        super();
    }

    ngOnInit() {
        this._stats = this.leagueStatsService.getAll();
        this.updateCurrent(0);
    }

    public goUp() {
        this.updateCurrent(1);
    }

    public goDown() {
        this.updateCurrent(-1);
    }

    private updateCurrent(change) {
        this._statNumber += change;

        this.currentStat = this._stats[this._statNumber];
        this.canGoUp = this._statNumber < this._statsCount - 1;
        this.canGoDown = this._statNumber > 0;
    }
}
