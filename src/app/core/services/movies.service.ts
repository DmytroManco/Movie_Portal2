import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import'rxjs/operator/map';
const url: string = 'http://localhost:8000/movies';

@Injectable()
export class MoviesService {

  constructor(private http: Http) {}

  public fetchData() {
    return this.http.get(url)
      .map((response) => response.json())
      .catch((error) => Observable.throw(error.json().error || 'Server error'));
  }

  public updateMovie(movie) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.put(`${url}/${movie.id}`, JSON.stringify(movie), {headers})
      .map((response) => response.json()).subscribe();
  }

  public sortMovies(value: string) {
    return this.http.get(`${url}?_sort=${value}&_order=desc`)
      .map((response) => response.json())
      .catch((error) => Observable.throw(error.json().error || 'Server error'));
  }

  public filterMovie(filter: string) {
    return this.http.get(`${url}?q=${filter}`)
      .map((response) => response.json())
      .catch((error) => Observable.throw(error.json().error || 'Server error'));
  }

  public getMovie(id: number) {
    return this.http.get(`${url}/${id}`)
      .map((response) => response.json())
      .catch((error) => Observable.throw(error.json().error || 'Server error'));
  }
}
