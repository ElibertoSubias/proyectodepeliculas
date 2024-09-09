import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Injectable } from "@angular/core";
import { CookieService } from "ngx-cookie-service";

@Injectable({
    providedIn: 'root'
})

export class MoviesService {
    constructor(private http : HttpClient, private cookies : CookieService) {}

    public saveMovie(data: any): Observable<any> {
        const token = this.getToken();
        const headers = { 'Content-Type': 'application/json', 'x-auth-token': `${token}` };
        return this.http.post<any>(`${environment.appBaseUrl}/movies`, JSON.stringify(data), {headers});
    }

    public updateMovie(data: any, id: string): Observable<any> {
        const token = this.getToken();
        const headers = { 'Content-Type': 'application/json', 'x-auth-token': `${token}` };
        return this.http.put<any>(`${environment.appBaseUrl}/movies/${id}`, JSON.stringify(data), {headers});
    }

    public removeMovie(id: string): Observable<any> {
        const token = this.getToken();
        const headers = { 'Content-Type': 'application/json', 'x-auth-token': `${token}` };
        return this.http.delete<any>(`${environment.appBaseUrl}/movies/${id}`, {headers});
    }

    public uploadImage(file: any, id: string): Observable<any> {
        const token = this.getToken();
        const headers = { 'x-auth-token': `${token}` };
        return this.http.post<any>(`${environment.appBaseUrl}/archivos/${id}`, file, {headers});
    }

    public getAllMovies(): Observable<any> {
        return this.http.get<any>(`${environment.appBaseUrl}/movies`);
    }

    public getMoviesByFilter(titulo: string): Observable<any> {
        return this.http.get<any>(`${environment.appBaseUrl}/movies/titulo/${titulo}`);
    }

    public getMovie(id: number): Observable<any> {
        const token = this.getToken();
        const headers = { 'x-auth-token': `${token}` };
        return this.http.get<any>(`${environment.appBaseUrl}/movies/${id}`, {headers});
    }

    setToken(token: any) {
        return this.cookies.set("token", token);
    }

    getToken() {
        return this.cookies.get("token");
    }
}