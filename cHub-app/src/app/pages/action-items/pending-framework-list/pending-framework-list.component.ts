import { Component } from '@angular/core';
import { PENDING_FRAMEWORKS } from 'src/app/constants/framework.constants';

@Component({
  selector: 'app-pending-framework-list',
  templateUrl: './pending-framework-list.component.html',
  styleUrls: ['./pending-framework-list.component.sass']
})
export class PendingFrameworkListComponent {
      frameworksList = PENDING_FRAMEWORKS;
}
