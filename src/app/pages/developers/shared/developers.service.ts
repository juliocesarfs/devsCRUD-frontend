import { Developer } from './../../../shared/models/developer';
import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap, retry } from 'rxjs/operators';
import { MessageResponse } from 'src/app/shared/interfaces/MessageResponse';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})

export class DevelopersService {

  public URL_DEVELOPER_SERVICE: string = environment.apiURL+'/developers'
constructor(private http: HttpClient) {}

  getDevelopers(): Observable<MessageResponse> {
    return this.http.get<MessageResponse>(this.URL_DEVELOPER_SERVICE).pipe(
      tap( (messageResponse) => console.log(messageResponse))
    )
  }

  deleteDeveloper(idDeveloper: string): Observable<MessageResponse> {
    return this.http.delete<MessageResponse>(this.URL_DEVELOPER_SERVICE+'/'+idDeveloper, httpOptions)
    .pipe(
      tap( (messageReturn) => console.log('delete response: ', messageReturn))
    )
  }

  getDeveloper(idDeveloper: string): Observable<MessageResponse> {
    return this.http.get<MessageResponse>(this.URL_DEVELOPER_SERVICE+'/'+idDeveloper)
    .pipe(
      tap((messageReturn) => console.log('get response: ', messageReturn))
    )
  }

  createDeveloper(developer: Developer): Observable<MessageResponse> {
    return this.http.post<MessageResponse>(this.URL_DEVELOPER_SERVICE, JSON.stringify(developer), httpOptions)
  }

  editDeveloper(developer: Developer): Observable<MessageResponse> {
    return this.http.put<MessageResponse>(this.URL_DEVELOPER_SERVICE, JSON.stringify(developer), httpOptions)
  }

  saveDeveloper(developer: Developer): Observable<MessageResponse> {
    if (developer.id) {
      return this.editDeveloper(developer)
    } else {
      return this.createDeveloper(developer)
    }
  }

  findDevelopers(filter: string): Observable<MessageResponse> {
    return this.http.post<MessageResponse>(this.URL_DEVELOPER_SERVICE+'/filter', filter, httpOptions)
  }
}
