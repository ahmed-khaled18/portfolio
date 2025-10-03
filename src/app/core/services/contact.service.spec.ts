import { TestBed } from '@angular/core/testing';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideZonelessChangeDetection } from '@angular/core';
import { ContactService } from './contact.service';
import { environment } from '../../../environments/environment';

describe('ContactService', () => {
  let service: ContactService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideZonelessChangeDetection(),
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    });
    service = TestBed.inject(ContactService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send contact form successfully', async () => {
    const formData = {
      name: 'John Doe',
      email: 'john@example.com',
      subject: 'Test Subject',
      message: 'Test message',
    };

    const responsePromise = service.sendContactForm(formData);

    const req = httpMock.expectOne(environment.web3forms.endpoint);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual({
      access_key: environment.web3forms.accessKey,
      ...formData,
    });

    req.flush({ success: true });

    const result = await responsePromise;
    expect(result).toBe(true);
  });

  it('should return false when submission fails', async () => {
    const formData = {
      name: 'John Doe',
      email: 'john@example.com',
      subject: 'Test Subject',
      message: 'Test message',
    };

    const responsePromise = service.sendContactForm(formData);

    const req = httpMock.expectOne(environment.web3forms.endpoint);
    req.flush({ success: false });

    const result = await responsePromise;
    expect(result).toBe(false);
  });
});
