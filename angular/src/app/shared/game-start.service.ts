import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {F} from './batlle.model'
import { Observable } from 'rxjs';
import { interval } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class GameStartService {

  constructor(private http: HttpClient) { }
  baseURL: string = 'http://localhost:3000';

  randomId ={
    myId:""
  }

  getPlay(){

    this.randomId.myId=Math.random().toString()

    // this.randomId.myId= rando.toString()

    // console.log(this.randomId.myId)



    return  this.http.put<F>(this.baseURL  , this.randomId )
    // return  this.http.get(this.baseURL)

  }


  getWaiting(_id): Observable<F>{
    console.log(_id)

      return  this.http.post<F>( this.baseURL, _id)
  }


}












