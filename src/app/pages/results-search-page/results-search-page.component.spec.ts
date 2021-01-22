import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsSearchPageComponent } from './results-search-page.component';

describe('ResultsSearchPageComponent', () => {
  let component: ResultsSearchPageComponent;
  let fixture: ComponentFixture<ResultsSearchPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultsSearchPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsSearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
