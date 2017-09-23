import { Component } from '@angular/core';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  page = 0;

  public next = () => {
    this.page++;
    return this.page;
  }

  public previous = () => {
    this.page--;
    return this.page;
  }  
}
