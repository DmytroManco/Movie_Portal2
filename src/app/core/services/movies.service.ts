import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import'rxjs/operator/map';
import { Movie } from '../../features';
import { Router } from '@angular/router';

@Injectable()
export class MoviesService {
  private url: string = 'http://localhost:8000/movies';

  constructor(private http: Http, private router: Router) {}

  public fetchData(): Observable<Movie[]> {
    return this.http.get(this.url)
      .map(this.returnData)
      .catch(this.returnError);
  }

  public updateMovie(movie: Movie) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.put(`${this.url}/${movie.id}`, JSON.stringify(movie), {headers})
      .map(this.returnData).subscribe();
  }

  public sortMovies(value: string): Observable<Movie[]>  {
    return this.http.get(`${this.url}?_sort=${value}&_order=desc`)
      .map(this.returnData)
      .catch(this.returnError);
  }

  public filterMovie(filter: string): Observable<Movie[]>  {
    return this.http.get(`${this.url}?q=${filter}`)
      .map(this.returnData)
      .catch(this.returnError);
  }

  public getMovie(id: number): Observable<Movie> {
    return this.http.get(`${this.url}/${id}`)
      .map(this.returnData)
      .catch((error: Response) => {
        this.router.navigate(['**']);
        return this.returnError(error);
      });
  }

  private returnData(response): Observable<Movie> {
    return response.json();
  }

  private returnError(error): Observable<any> {
    return Observable.throw(error.json().error || 'Server error');
  }
}
