  
import {Component, Input} from '@angular/core';


@Component({

    selector : 'app-body',
    templateUrl : 'body.component.html',
    styleUrls : ['body.component.css']

})

export class BodyComponent{

    
    showMovie : boolean = false;
    showForm  : boolean = true;
    user : string = '';
    
    toggleContent():void{
        this.showMovie =! this.showMovie; 
    }
    toggleForm():void{
        this.showForm =! this.showForm;
    }
    
}