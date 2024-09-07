import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Genre } from '../../interfaces/Genre';
import { HttpClient } from "@angular/common/http";
import { throwError } from "rxjs";

@Component({
  selector: 'app-workspace',
  templateUrl: './addMovie.component.html',
  styleUrls: ['./addMovie.component.scss']
})
export class AddMovieComponent implements OnInit {

  genres: Genre[] = [];
  @ViewChild('txtGenre') txtGenre:ElementRef | undefined;
  status: "initial" | "uploading" | "success" | "fail" = "initial"; // Variable to store file status
  file: File | null = null; // Variable to store file

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    
  }

  onChange(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      this.status = "initial";
      this.file = file;
    }
  }

  onUpload() {
    if (this.file) {
      const formData = new FormData();
  
      formData.append('file', this.file, this.file.name);
  
      const upload$ = this.http.post("https://httpbin.org/post", formData);
  
      this.status = 'uploading';
  
      upload$.subscribe({
        next: () => {
          this.status = 'success';
        },
        error: (error: any) => {
          this.status = 'fail';
          return throwError(() => error);
        },
      });
    }
  }

  addGenre() {
    if (this.txtGenre?.nativeElement.value) {
      var newItem: Genre = {name: this.txtGenre?.nativeElement.value};
      this.genres.push(newItem);
      this.txtGenre.nativeElement.value = "";
    }
  }

}
