import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  constructor(private router: Router) { }

  public begin = () => {
    this.router.navigate(['/form']);
  }
}
