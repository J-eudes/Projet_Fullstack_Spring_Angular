import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Filiere } from './interfaces/filiere.interface';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) {}

  getFiliere(): Observable<Filiere[]>{
    return this.http.get<Filiere[]>("http://localhost:8080/api/filiere")
  }


}
