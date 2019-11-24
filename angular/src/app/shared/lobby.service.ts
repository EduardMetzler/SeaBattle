import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {F} from './batlle.model'
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class LobbyService {
  baseURL: string = 'http://localhost:3000';


  constructor(private http: HttpClient) { }


  // getLobby(id): Observable<F>{


  //     return  this.http.get<F>( this.baseURL + `/${id}`)
  // }
}


