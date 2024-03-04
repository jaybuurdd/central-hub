import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-cards',
  templateUrl: './dashboard-cards.component.html',
  styleUrls: ['./dashboard-cards.component.sass']
})
export class DashboardCardsComponent {
    @Input() title: string = '';
    @Input() number?: string = '';
    @Input() icon?: string;
}
