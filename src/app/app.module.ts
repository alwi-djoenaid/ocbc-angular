import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { MoviesComponent } from './components/movies/movies.component';
import { ReactiveFormsModule } from '@angular/forms';
import { httpInterceptorProviders } from './components/http-interceptors';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    MoviesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
