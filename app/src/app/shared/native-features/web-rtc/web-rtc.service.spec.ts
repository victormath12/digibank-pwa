import { TestBed, inject } from '@angular/core/testing';

import { WebRTCService } from './web-rtc.service';

describe('WebRTCService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WebRTCService]
    });
  });

  it('should be created', inject([WebRTCService], (service: WebRTCService) => {
    expect(service).toBeTruthy();
  }));
});
