import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'results',
  templateUrl: './results.component.html',
})
export class ResultsComponent {
  constructor(private router: Router) { }

  public back = () => {
    this.router.navigate(['/dashboard']);
  }
}
