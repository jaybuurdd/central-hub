import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-interactive-table',
  templateUrl: './interactive-table.component.html',
  styleUrls: ['./interactive-table.component.sass']
})
export class InteractiveTableComponent implements OnInit {
  @Input() title: string = '';
  @Input() columns: any[] = [];
  @Input() data: any[] = [];
  @Input() action: string = 'view';
  @Output() rowClick = new EventEmitter<any>();

  displayedColumns: string[] = [];

  ngOnInit(): void {
    this.displayedColumns = this.columns.map(c => c.id);
  }

   onRowClicked(rowData: any): void {
    this.rowClick.emit({data: rowData, action: this.action});
  }
}
