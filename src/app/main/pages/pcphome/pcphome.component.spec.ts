import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcphomeComponent } from './pcphome.component';

describe('PcphomeComponent', () => {
  let component: PcphomeComponent;
  let fixture: ComponentFixture<PcphomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PcphomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PcphomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
