import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientDetailWithIdComponent } from './client-detail-with-id.component';

describe('ClientDetailWithIdComponent', () => {
  let component: ClientDetailWithIdComponent;
  let fixture: ComponentFixture<ClientDetailWithIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientDetailWithIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientDetailWithIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
