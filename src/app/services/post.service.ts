import { Injectable } from '@angular/core';
import { Post } from './../post-modelo/post-model';

@Injectable()
export class PostService {
    posts = [
         new Post(1, "Arya", "Texto aqui", 0),
         new Post(2, "Daenerys", "Texto aqui", 0)
    ];

    deuLike = false;
    // maxId = 0;

    getPosts() {
        return this.posts;
    };

    addPost(post: Post){
        this.posts.push(post);
        // post.id = this.maxId; 
        // this.maxId ++;
    };

    excluirPost(id){
        for(let i = 0; i < this.posts.length; i++){
            if(this.posts[i].id == id) {
                this.posts.splice(i, 1);
            }
        }
    };

    addLike(post: Post) {
        post.qtd_likes ++;
    };

}