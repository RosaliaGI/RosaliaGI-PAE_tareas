import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfContactoComponent } from './inf-contacto.component';

describe('InfContactoComponent', () => {
  let component: InfContactoComponent;
  let fixture: ComponentFixture<InfContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfContactoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
