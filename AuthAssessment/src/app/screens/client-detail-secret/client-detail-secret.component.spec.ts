import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientDetailSecretComponent } from './client-detail-secret.component';

describe('ClientDetailSecretComponent', () => {
  let component: ClientDetailSecretComponent;
  let fixture: ComponentFixture<ClientDetailSecretComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientDetailSecretComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientDetailSecretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
