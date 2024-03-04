import { Component } from '@angular/core';
import { PENDING_APPLICATION_LIST } from 'src/app/constants/application.constants';

@Component({
  selector: 'app-pending-application-list',
  templateUrl: './pending-application-list.component.html',
  styleUrls: ['./pending-application-list.component.sass']
})
export class PendingApplicationListComponent {
    applicationList = PENDING_APPLICATION_LIST;

    handleRowClick(event: {data: any, action: string}): void {
      if (event.action === 'view') {
         console.log('view')
      } 
  }
}
