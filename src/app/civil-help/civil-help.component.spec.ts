import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CivilHelpComponent } from './civil-help.component';

describe('CivilHelpComponent', () => {
  let component: CivilHelpComponent;
  let fixture: ComponentFixture<CivilHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CivilHelpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CivilHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
