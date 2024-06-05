import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private heroesUrl = 'http://localhost:3000/heroes';
  private powersUrl = 'http://localhost:3000/powers';

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<any> {
    return this.http.get<any>(this.heroesUrl);
  }

  getPowers(): Observable<any> {
    return this.http.get<any>(this.powersUrl);
  }
}
