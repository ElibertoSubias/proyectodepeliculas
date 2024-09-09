import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from "@angular/common/http";
import { MoviesService } from '../../../services/movies.service';
import { environment } from '../../../../environments/environment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-workspace',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies: any[] = [];
  baseUrl: string = environment.appBaseUrlMedia;
  defaultOrder: boolean = true;

  constructor(
    private http: HttpClient,
    private moviesService : MoviesService,
    private route: ActivatedRoute
  ) {
    
   }

  ngOnInit(): void {
    this.route.snapshot.queryParams['filter'];

    if (this.route.snapshot.queryParams['filter']) {
      this.moviesService.getMoviesByFilter(this.route.snapshot.queryParams['filter']).subscribe({
        next: (event: any) => {
          this.movies = event.peliculas;
        },
        error: (err: any) => {
          console.log(err);
          alert("Ocurrio un error al obtener la informacion.");
        },
      });
    } else {
      this.moviesService.getAllMovies().subscribe({
        next: (event: any) => {
          this.movies = event.peliculas;
          this.movies = this.sortMovie();
        },
        error: (err: any) => {
          console.log(err);
          alert("Ocurrio un error al obtener las informacion.");
        },
      });
    }
  }

  changeOrderBy() {
    this.defaultOrder = !this.defaultOrder;
    this.movies = this.sortMovie();
  }

  sortMovie() {
    let order = this.defaultOrder;
    const rta = this.movies.sort(function(a, b){
      if(a.titulo.toLowerCase() < b.titulo.toLowerCase()) { return order ? -1 : 1; }
      if(a.titulo.toLowerCase() > b.titulo.toLowerCase()) { return order ? 1 : -1; }
      return 0;
  })
    return rta;
  }

}
