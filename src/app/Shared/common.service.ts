import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import {  throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
	providedIn: 'root'
})
export class CommonService {
	public apiServer = "https://jsonplaceholder.typicode.com/users";
	constructor(private httpClient: HttpClient) { }

	 getallusers(){
	 	return this.httpClient.get(this.apiServer)
	 }
}