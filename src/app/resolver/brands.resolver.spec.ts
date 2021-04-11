import { TestBed } from '@angular/core/testing';

import { BrandsResolver } from './brands.resolver';

describe('BrandsResolver', () => {
  let resolver: BrandsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(BrandsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
