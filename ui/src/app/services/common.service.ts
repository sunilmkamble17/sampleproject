import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private router: Router) { }

  logOut() {
    try {
      sessionStorage.clear();
      localStorage.clear();
    } catch (Execption) {
      sessionStorage.clear();
      localStorage.clear();
    }
    this.router.navigate(['/login']);
  }

  buildQuery(data: any) {
    let queryData = '';
    for (const prop in data) {
      if (data[prop] !== '' && data[prop] !== 'undefined' && data[prop] !== null) {
        if (queryData === '') {
          queryData = '?' + prop + '=' + encodeURIComponent(data[prop]);
        } else {
          queryData += '&' + prop + '=' + encodeURIComponent(data[prop]);
        }
      }
    }
    return queryData;
  }

  handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      // console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      // return Observable.throw(error.json().error || error.message);
      return throwError(error);
      // return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  log(message: string) {
    // this.messageService.add('HeroService: ' + message);
  }
}
