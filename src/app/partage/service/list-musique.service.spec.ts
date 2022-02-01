import { TestBed } from '@angular/core/testing';

import { ListMusiqueService } from './list-musique.service';

describe('ListPersonnelService', () => {
  let service: ListMusiqueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListMusiqueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
