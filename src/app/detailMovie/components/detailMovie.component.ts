import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-workspace',
  templateUrl: './detailMovie.component.html',
  styleUrls: ['./detailMovie.component.scss']
})
export class DetailMovieComponent implements OnInit {

  constructor(private route:ActivatedRoute){}
    idMovie: number = 0;

  ngOnInit(): void {
    this.idMovie = this.route.snapshot.params['id'];
        console.log(this.idMovie);
  }

}
