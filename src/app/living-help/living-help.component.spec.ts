import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivingHelpComponent } from './living-help.component';

describe('LivingHelpComponent', () => {
  let component: LivingHelpComponent;
  let fixture: ComponentFixture<LivingHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivingHelpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivingHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
