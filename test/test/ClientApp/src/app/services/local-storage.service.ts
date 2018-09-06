import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private storage = window.localStorage;
  private json = window['JSON'];

  constructor() { }

  setObj(name:string, objValue: any) {
    this.storage.setItem(name, this.json.stringify(objValue));
  }

  getObj(name: string) {
    return this.json.parse(this.storage.getItem(name));
  }

  setItem(name: string, val: string) {
    this.storage.setItem(name, val);
  }

  getItem(name: string) {
    return this.storage.getItem(name);
  }
}
