import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-workspace',
  templateUrl: './detailMovie.component.html',
  styleUrls: ['./detailMovie.component.scss']
})
export class DetailMovieComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private moviesService : MoviesService,
    private router: Router
  ){}

  idMovie: number = 0;
  movie: any = {};
  baseUrl: string = environment.appBaseUrlMedia;

  ngOnInit(): void {
    this.idMovie = this.route.snapshot.params['id'];

    this.moviesService.getMovie(this.idMovie).subscribe({
      next: (event: any) => {
        this.movie = event.movieExistente;
      },
      error: (err: any) => {
        console.log(err);
        alert("Ocurrio un error al obtener la pelicula.");
      },
    });
  }

  removeMovie() {
    this.moviesService.removeMovie(this.movie._id).subscribe({
      next: (event: any) => {
        this.router.navigate([`/home/`]);
      },
      error: (err: any) => {
        console.log(err);
        alert("Ocurrio un error al eliminar la pelicula.");
      },
    });
  }

}
