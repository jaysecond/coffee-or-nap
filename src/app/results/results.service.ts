import { Injectable } from '@angular/core';
import { Result, RESULTS } from './results-array';

@Injectable()
export class ResultsService {
    public result:string;

    constructor() {
        this.result = "result";
    }

    setResults (data) {
        this.result = RESULTS[data-7].result;
    }

    getResults () {
        return this.result;
    }
}