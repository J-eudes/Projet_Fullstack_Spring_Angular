import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Filiere } from './interfaces/filiere.interface';
import { Module } from './interfaces/module.interface';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  //PROPRIETE
  baseUrl = "http://localhost:8080/api"
  urlFiliere= "http://localhost:8080/api/filiere"

  constructor(private http: HttpClient) {}

  getFiliere(): Observable<Filiere[]>{
    return this.http.get<Filiere[]>(`${this.baseUrl}/filiere`)    
  }

  postFiliere(filiere: Filiere): Observable<Filiere> {
    return this.http.post<Filiere>(this.urlFiliere, filiere)
  }

  putFiliere(filiere: Filiere): Observable<Filiere>{   
    return this.http.put<Filiere>(this.urlFiliere +"/"+filiere.id, filiere)
  }

  deleteFiliere(filiere: Filiere){    
    return this.http.delete(this.urlFiliere +"/"+ filiere.id)
  }

  getModule(): Observable<Module[]>{
    return this.http.get<Module[]>(`${this.baseUrl}/module`)
  }


}
