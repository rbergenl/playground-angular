import { Injectable } from '@angular/core';
import {Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor() { }

  readJsonAsync() {
    return new Promise((resolve, reject) => {
      const jsonNode = document.querySelector('script[type="application/json"]');
      const jsonText = jsonNode.textContent;
      const jsonData = JSON.parse(jsonText);
      console.log(jsonData);
      resolve(jsonData);
    });
  }
  // retrieves content mapped to its data fields
  getContentAsync(): Observable<any> {
    const promise = this.readJsonAsync();
    return from(promise).pipe(map(data => data));
  }

  readJsonSync() {
    const jsonNode = document.querySelector('script[type="application/json"]');
    const jsonText = jsonNode.textContent;
    const jsonData = JSON.parse(jsonText);
    return jsonData;
  }
  // retrieves content mapped to its data fields
  getContentSync(): Observable<any> {
    return this.readJsonSync();
  }

}
