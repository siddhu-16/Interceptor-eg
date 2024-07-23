import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private hhtp: HttpClient) { }
  getdata(){
    return this.hhtp.get<any>('https://jsonplaceholder.typicode.com/users');
  }
}
