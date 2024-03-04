import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingFrameworkListComponent } from './pending-framework-list.component';

describe('PendingFrameworkListComponent', () => {
  let component: PendingFrameworkListComponent;
  let fixture: ComponentFixture<PendingFrameworkListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PendingFrameworkListComponent]
    });
    fixture = TestBed.createComponent(PendingFrameworkListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
