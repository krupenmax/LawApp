import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyHelpComponent } from './family-help.component';

describe('FamilyHelpComponent', () => {
  let component: FamilyHelpComponent;
  let fixture: ComponentFixture<FamilyHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamilyHelpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FamilyHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
