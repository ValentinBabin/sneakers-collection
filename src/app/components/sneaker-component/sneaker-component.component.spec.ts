import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SneakerComponentComponent } from './sneaker-component.component';

describe('SneakerComponentComponent', () => {
  let component: SneakerComponentComponent;
  let fixture: ComponentFixture<SneakerComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SneakerComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SneakerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
