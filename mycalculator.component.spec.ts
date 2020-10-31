import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MycalculatorComponent } from './mycalculator.component';

describe('MycalculatorComponent', () => {
  let component: MycalculatorComponent;
  let fixture: ComponentFixture<MycalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MycalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MycalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
