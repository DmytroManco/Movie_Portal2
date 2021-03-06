import { Component, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MoviesService } from '../../core/services/movies.service';

@Component({
  selector: 'mp-add-movie',
  templateUrl: 'add-movie.component.html',
  styleUrls: ['add-movie.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddMovieComponent {

  public movieForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    poster: new FormControl('', [Validators.required,
      Validators.pattern(/^(http|https):\/\/[^ "]+$/)]),
    description: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    director: new FormControl('', [Validators.required]),
    actors: new FormControl('', [Validators.required]),
    genres: new FormControl('', [Validators.required])
  });

  constructor(private service: MoviesService) {}

  public postData(data, $event) {
    $event.preventDefault();
    let dataObj = data.value;
    let actorsArr = data.value.actors.split(',');
    let genreArr = dataObj.genres.split(',');

    let movie = {
      title: dataObj.title,
      posterUrl: dataObj.poster,
      stars: 0,
      likes: 0,
      genres: genreArr,
      actors: actorsArr,
      director: dataObj.director,
      description: dataObj.description
    };

    this.movieForm.reset();
    this.service.postData(movie);
  }

}
