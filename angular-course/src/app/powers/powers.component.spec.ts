import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowersComponent } from './powers.component';

describe('PowersComponent', () => {
  let component: PowersComponent;
  let fixture: ComponentFixture<PowersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PowersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
