import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import type { ContactFormData, Web3FormsResponse } from './contact.model';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private readonly http: HttpClient = inject(HttpClient);

  async sendContactForm(formData: ContactFormData): Promise<boolean> {
    const payload: { access_key: string } & ContactFormData = {
      access_key: environment.web3forms.accessKey,
      ...formData,
    };

    const response: Web3FormsResponse = await firstValueFrom(
      this.http.post<Web3FormsResponse>(environment.web3forms.endpoint, payload)
    );

    return response.success;
  }
}
