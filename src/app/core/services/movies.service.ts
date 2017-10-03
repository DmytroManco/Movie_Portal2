import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import'rxjs/operator/map';
const url = 'http://localhost:8000/movies';

@Injectable()
export class MoviesService {

  constructor(private http: Http) {}

  public fetchData() {
    return this.http.get(url)
      .map((response) => response.json());
  }

}
