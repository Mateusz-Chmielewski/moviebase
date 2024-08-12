import {inject, Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TmdbClientService {
  private baseUrl = this.fixBaseUrl(environment.apiUrl);
  private apiKey = environment.apiKey;
  private imageUrl = this.fixBaseUrl(environment.imagesUrl);

  private httpClient = inject(HttpClient);

  constructor() {
  }

  get<T>(url: string, parameters: any): Observable<T> {
    const questionMark = Object.entries(parameters).length > 0 ? '?' : '';
    let apiUrl = this.baseUrl + url + questionMark;
    for (const [key, value] of Object.entries(parameters)) {
      apiUrl += key + '=' + value + '&';
    }
    apiUrl += 'api_key=' + this.apiKey;

    return this.httpClient.get<T>(apiUrl);
  }

  fixBaseUrl(url: string) {
    return url.endsWith('/') ? url : url + '/';
  }
}
