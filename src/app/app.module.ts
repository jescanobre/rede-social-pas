import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostsComponent } from './post/post.component';
import { routing } from './app.routing';
import { LinhaDoTempoComponent } from './linha-do-tempo/linha-do-tempo.component';
import { PostInputComponent } from './post-input/post-input.component';
import { PostService } from './services/post.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostsComponent,
    LinhaDoTempoComponent,
    PostInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
