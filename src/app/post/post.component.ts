import { Post } from '../post-modelo/post-model';
import { PostService } from './../services/post.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostsComponent implements OnInit {

  @Input() post: Post;

  @Output() recebeuLike = new EventEmitter();

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  like() {
    // event.preventDefault();
    this.postService.addLike(this.post);

    // this.post.qtd_likes++;
    // console.log("clicou");
    // this.recebeuLike.emit(this.post);
  }

  excluir(){
    this.postService.excluirPost(this.post.id);
  }
  
}
