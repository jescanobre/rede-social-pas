import { Component } from '@angular/core';
import { Post } from './post-modelo/post-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  posts = [
    new Post(1, 'Arya', 'Texto aqui', 0)
  ]

}
