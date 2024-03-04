import { Component} from '@angular/core';
import { USER_LIST } from 'src/app/constants/user.constants';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent {
    userList = USER_LIST;

}
