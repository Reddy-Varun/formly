import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FormlyServiceService {
  constructor(private http: HttpClient) {}

  getForm(id: string) {
    return this.http.get(this.getUrlWithID(id));
  }

  private getUrlWithID(id: string) {
    return `../../assets/${id}.json`;
  }
}
