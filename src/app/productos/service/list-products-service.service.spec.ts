import { TestBed } from '@angular/core/testing';

import { ListProductsServiceService } from './list-products-service.service';

describe('ListProductsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListProductsServiceService = TestBed.get(ListProductsServiceService);
    expect(service).toBeTruthy();
  });
});
