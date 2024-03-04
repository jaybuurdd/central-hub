import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-table',
  templateUrl: './basic-table.component.html',
  styleUrls: ['./basic-table.component.sass']
})
export class BasicTableComponent implements OnInit {
  @Input() title: string = '';
  @Input() columns: any[] = [];
  @Input() data: any[] = [];

  displayedColumns: string[] = [];

  ngOnInit(): void {
    this.displayedColumns = this.columns.map(c => c.id);
  }
}

