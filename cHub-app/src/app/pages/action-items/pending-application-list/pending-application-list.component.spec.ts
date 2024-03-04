import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingApplicationListComponent } from './pending-application-list.component';

describe('PendingApplicationListComponent', () => {
  let component: PendingApplicationListComponent;
  let fixture: ComponentFixture<PendingApplicationListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PendingApplicationListComponent]
    });
    fixture = TestBed.createComponent(PendingApplicationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
