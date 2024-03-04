import { Component } from '@angular/core';
import { PENDING_USER_LIST } from 'src/app/constants/user.constants';

@Component({
  selector: 'app-pending-user-list',
  templateUrl: './pending-user-list.component.html',
  styleUrls: ['./pending-user-list.component.sass']
})
export class PendingUserListComponent {
  userList = PENDING_USER_LIST;

  handleRowClick(event: {data: any, action: string}): void {
    if(event.action === 'view') {
      console.log('view');
    }
  }
}
