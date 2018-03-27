import { Post } from '../post-modelo/post-model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostsComponent implements OnInit {

  @Input() post: Post;

  constructor() { }

  ngOnInit() {
  }

  @Output() recebeuLike = new EventEmitter();
  
  curtir() {
    event.preventDefault();
    this.post.qtd_likes++;
    console.log("clicou");
    this.recebeuLike.emit(this.post);
  }

  
}
