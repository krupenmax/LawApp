import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArbitrazhHelpComponent } from './arbitrazh-help.component';

describe('ArbitrazhHelpComponent', () => {
  let component: ArbitrazhHelpComponent;
  let fixture: ComponentFixture<ArbitrazhHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArbitrazhHelpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArbitrazhHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
