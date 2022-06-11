import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class CommonApiFuncService {
  
  constructor(
    private http: HttpClient
  ) { }

  // private http: HttpClient
  // constructor(httpBackend: HttpBackend) {
  //   this.http = new HttpClient(httpBackend);
  // }

  get(url: any) {
    return this.http.get(url, {
      headers: httpOptions.headers,
    });
  }

  post(url: any, data: any) {
    return this.http.post(url, data, httpOptions);
  }

  delete(url: any) {
    return this.http.delete(url, httpOptions);
  }

  put(url: any, data: any) {
    return this.http.put(url, data, httpOptions);
  }

  formDataPut(url: any, data: any) {
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'multipart/form-data');
    headers.set('Accept', 'multipart/form-data');
    const params = new HttpParams();
    return this.http.put(url, data, { params, headers });
  }

  getXML(url: any) {
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'text/xml');
    const params = new HttpParams();
    return this.http.get(url, { responseType: 'text' });
  }
  formDataPost(url: any, data: any) {
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'multipart/form-data');
    headers.set('Accept', 'multipart/form-data');
    const params = new HttpParams();
    return this.http.post(url, data, { params, headers });
  }
}
