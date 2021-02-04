import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SneakerPageComponent } from './sneaker-page.component';

describe('SneakerPageComponent', () => {
  let component: SneakerPageComponent;
  let fixture: ComponentFixture<SneakerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SneakerPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SneakerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
