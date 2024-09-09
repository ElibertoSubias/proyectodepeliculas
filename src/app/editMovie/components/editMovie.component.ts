import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Genre } from '../../interfaces/Genre';
import { HttpClient, HttpResponse } from "@angular/common/http";
import { throwError } from "rxjs";
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-workspace',
  templateUrl: './editMovie.component.html',
  styleUrls: ['./editMovie.component.scss']
})
export class EditMovieComponent implements OnInit {

  movieForm: FormGroup;
  movie: any = {};
  idMovie: number = 0;
  id: string = "";

  constructor(
    private route:ActivatedRoute,
    private http: HttpClient, 
    private fb: FormBuilder,
    private moviesService : MoviesService,
    private router: Router
  ){
    this.movieForm = this.fb.group({
      titulo: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      sinopsis: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(400)]],
      actores: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(400)]],
      portada: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      categorias: ['', [Validators.required]],
    })
  }


  @ViewChild('txtTitulo') txtTitulo!:ElementRef;
  @ViewChild('txtSinopsis') txtSinopsis!:ElementRef;
  @ViewChild('txtActores') txtActores!:ElementRef;
  @ViewChild('fileUpload') fileUpload!:ElementRef;
  @ViewChild('txtCategoria') txtCategoria!:ElementRef;

  titulo: string = "";
  sinopsis: string = "";
  actores: string = "";
  portada: string = "";
  categoria: string = "";
  categorias: Genre[] = [];

  status: "initial" | "uploading" | "success" | "fail" = "initial"; // Variable to store file status
  file?: File;

  ngOnInit(): void {
    this.idMovie = this.route.snapshot.params['id'];

    this.moviesService.getMovie(this.idMovie).subscribe({
      next: (event: any) => {
        this.movie = event.movieExistente;
        this.id = this.movie._id;
        this.categorias = this.movie.categorias;
        this.movieForm.patchValue({
          titulo: this.movie.titulo,
          sinopsis: this.movie.sinopsis,
          actores: this.movie.actores,
          portada: this.movie.portada,
          categorias: this.movie.categorias
        });
      },
      error: (err: any) => {
        console.log(err);
        alert("Ocurrio un error al obtener la pelicula");
      },
    });
  }

  saveMovie() {
    this.movieForm.value.categorias = this.categorias;
    this.movieForm.value.portada = this.file ? this.file.name : this.movieForm.value.portada;
    this.moviesService.updateMovie(this.movieForm.value, this.id).subscribe({
      next: (event: any) => {
        
        // Subimos portada en caso de ser grabada con exito la pelicula
        if (this.file) {
          this.onUpload(event.movie._id);
        } else {
          this.router.navigate([`/movie/${this.idMovie}`]);
        }
        
      },
      error: (err: any) => {
        console.log(err);
        alert("Ocurrio un error al actualizar la pelicula, intenta de nuevo.");
      },
    });
  }

  onChange(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      this.status = "initial";
      this.file = file;
    }
  }

  addPortada() {
    this.fileUpload?.nativeElement.click();
  }

  onUpload(id: string) {
    if (this.file) {
      const formData = new FormData();
  
      formData.append('archivo', this.file, this.file.name);
  
      this.moviesService.uploadImage(formData, id).subscribe({
        next: (event: any) => {
          
          // Correcto
          this.router.navigate([`/movie/${this.idMovie}`]);
          
        },
        error: (err: any) => {
          console.log(err);
          alert("Ocurrio un error al actualizar la pelicula, intenta de nuevo.");
        },
      });
    }
  }

  addGenre() {
    if (this.txtCategoria?.nativeElement.value) {
      var newItem: Genre = {name: this.txtCategoria?.nativeElement.value};
      this.categorias.push(newItem);
      this.txtCategoria.nativeElement.value = "";
    } else {
      this.txtCategoria?.nativeElement.focus();
    }
  }

  deleteGenre(categoria: string) {
    this.categorias = this.categorias.filter(item => item.name !== categoria)
  }

}
