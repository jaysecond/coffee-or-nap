import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ResultsService } from './results.service';

@Component({
  selector: 'results',
  templateUrl: './results.component.html',
})
export class ResultsComponent{
  constructor(
    private router: Router,
    private resultsService: ResultsService
  ) { }

  result = this.resultsService.getResults();

  public back = () => {
    this.router.navigate(['/dashboard']);
  }
}
