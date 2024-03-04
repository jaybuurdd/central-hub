import { Component, OnInit } from '@angular/core';
import { DashboardCard, DASHBOARD_DATA } from 'src/app/constants/dashboard.constants';
import { DOWNLOAD_HISTORY } from 'src/app/constants/download.constants';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit{
    dashboardCards: DashboardCard[] = [];
    userRole: string = localStorage.getItem('userRole') as string;
    downloadHistory = DOWNLOAD_HISTORY;


    ngOnInit(): void {
      this.loadDashboardData();
    }

    loadDashboardData(): void {
      if(this.userRole !== 'Download'){

        this.dashboardCards = DASHBOARD_DATA[this.userRole];
      }
    }
}
