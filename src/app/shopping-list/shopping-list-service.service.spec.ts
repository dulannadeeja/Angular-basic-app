import { TestBed } from '@angular/core/testing';

import { ShoppingListServiceService } from './shopping-list-service.service';

describe('ShoppingListServiceService', () => {
  let service: ShoppingListServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShoppingListServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
