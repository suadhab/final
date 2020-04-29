import {Injectable} from '@angular/core';
import {IMovie} from './movie';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn:'root'
}) 

export class MoviesService {
    
        constructor(private http:HttpClient){}
        getMovies(): Observable<IMovie[]>{
          return this.http.get<IMovie[]>('assets/movies.json')
          
          }
      }


    
