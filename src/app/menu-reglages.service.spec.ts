import { TestBed } from '@angular/core/testing';

import { MenuReglagesService } from './menu-reglages.service';

describe('MenuReglagesService', () => {
  let service: MenuReglagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuReglagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
