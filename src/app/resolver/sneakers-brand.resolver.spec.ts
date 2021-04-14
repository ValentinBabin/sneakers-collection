import { TestBed } from '@angular/core/testing';

import { SneakersBrandResolver } from './sneakers-brand.resolver';

describe('SneakersBrandResolver', () => {
  let resolver: SneakersBrandResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(SneakersBrandResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
