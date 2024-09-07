import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AddMovieComponent } from './components/addMovie.component';
import { AddMovieRoutingModule } from './addMovie-routing.module';
import { provideHttpClient } from '@angular/common/http';


@NgModule({
    declarations: [
        AddMovieComponent
    ],
    imports: [
        CommonModule,
        AddMovieRoutingModule,
        SharedModule
    ],
    providers: [provideHttpClient()]
})
export class AddMovieModule { }
