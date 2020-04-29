import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { MovieComponent } from './movies/movie.component';
import { HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {BodyComponent} from './body/body.component';
import {NavComponent} from './nav/nav.component';




@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    NavComponent
    
    
    
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
