import {Component,Input} from '@angular/core';
import {IMovie} from './movie';
import {MoviesService} from './movies.service';

@Component({
    selector: 'app-movies',
    templateUrl: './movie.component.html',
    styleUrls: ['movie.component.css'],  
    
    
   
})


export class MovieComponent  {

    @Input() userName:string;
    
    message : string = "This is my first movie app I hope you enjoy it!";
    imageWidth : number=20;
    imageMargin : number=2;
    movies:IMovie[] = [];
    constructor(private movieService:MoviesService){}

    ngOnInit():void
    {
        this.movieService.getMovies().subscribe(data=>this.movies=data);
    }
    
    
}

           
                

                

  

    

