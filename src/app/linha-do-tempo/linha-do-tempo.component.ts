import { Post } from './../post-modelo/post-model';
import { PostService } from './../services/post.service';

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-linha-do-tempo',
  templateUrl: './linha-do-tempo.component.html',
  styleUrls: ['./linha-do-tempo.component.css']
})
export class LinhaDoTempoComponent implements OnInit {
  posts: Post [];

  constructor(private postService: PostService) { }

  fill(){
    this.postService.getPosts()
      .subscribe((data) => {
        this.posts = data;
      },
        (error) => console.log(error));
  }

  ngOnInit() {
    //this.posts = this.postService.getPosts(); 
    //por que isso?
    this.fill();
  }

  addPost(post: Post){
    this.postService.addPost(post)
      .subscribe((data)=> { //o que é o data mesmo?
        console.log(data);
        this.fill();
      },
        (error) => console.log(error));
  }

  excluirPost(post: Post){ //essa parte do post:Post é pra dizer que post é um objeto do tipo Post?
    this.postService.excluirPost(post)
      .subscribe((data) => {
        console.log(data);
        this.fill();
      },
        (error) => console.log(error));
  }
  
  // postRecebeuLike(post){
  //   console.log(post);
  //  }
}
