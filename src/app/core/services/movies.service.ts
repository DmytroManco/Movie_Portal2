import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import'rxjs/operator/map';
import { Router } from '@angular/router';
const url: string = 'http://localhost:8000/movies';

@Injectable()
export class MoviesService {

  constructor(private http: Http, private router: Router) {}

  public fetchData() {
    return this.http.get(url)
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json().error || 'Server error'));
  }

  public updateMovie(movie) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.put(`${url}/${movie.id}`, JSON.stringify(movie), {headers})
      .map((response: Response) => response.json()).subscribe();
  }

  public sortMovies(value: string) {
    return this.http.get(`${url}?_sort=${value}&_order=desc`)
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json().error || 'Server error'));
  }

  public filterMovie(filter: string) {
    return this.http.get(`${url}?q=${filter}`)
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json().error || 'Server error'));
  }

  public getMovie(id: number) {
    return this.http.get(`${url}/${id}`)
      .map((response: Response) => response.json())
      .catch((error: Response) => {
        this.router.navigate(['**']);
        return Observable.throw(error.json().error || 'Server error');
      });
  }
}
