import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationAndDataHeaderComponent } from './location-and-data-header.component';

describe('LocationAndDataHeaderComponent', () => {
  let component: LocationAndDataHeaderComponent;
  let fixture: ComponentFixture<LocationAndDataHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationAndDataHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationAndDataHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
