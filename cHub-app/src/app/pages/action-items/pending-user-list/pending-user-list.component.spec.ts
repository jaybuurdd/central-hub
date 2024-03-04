import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingUserListComponent } from './pending-user-list.component';

describe('PendingUserListComponent', () => {
  let component: PendingUserListComponent;
  let fixture: ComponentFixture<PendingUserListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PendingUserListComponent]
    });
    fixture = TestBed.createComponent(PendingUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
