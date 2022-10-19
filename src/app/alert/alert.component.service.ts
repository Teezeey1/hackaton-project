import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { Model } from './alert.component.repsonsemode';

@Injectable({
    providedIn: 'root'
  })
export class AlertService{
    private theBaseUrl = "https://data.cdc.gov/resource/3nnm-4jni.json";

    constructor(private http:HttpClient){}

    // getCovidInfo():Observable<any>{
    //     return this.http.get<any>(this.theBaseUrl);
    // }

    getCovidInfoCounty(str:string):Observable<Model[]>{
        // if (str.length==0){
        //     return this.http.get<Model[]>(this.theBaseUrl);
        // }
        // else{
            return this.http.get<Model[]>(this.theBaseUrl+"?county="+str);
        // }
    }
}