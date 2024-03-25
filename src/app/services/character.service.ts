import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { CharacterResults } from '../interfaces/character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  getCharacterList(): Observable<CharacterResults>{
    return  this.http.get<CharacterResults>('https://rickandmortyapi.com/api/character')
            .pipe(catchError( (error: HttpErrorResponse) => {
              let errorMessage = "";
              if(error.error instanceof ErrorEvent){
                errorMessage = `Error: ${error.error.message}`;
              }else{
                errorMessage = `Error code: ${error.status}; message: ${error.error.message}`;
              }
              return throwError(() => errorMessage);
            }) );
  }
}
