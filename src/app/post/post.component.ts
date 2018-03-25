import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post-modelo/post-model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() post:Post;
  
}
