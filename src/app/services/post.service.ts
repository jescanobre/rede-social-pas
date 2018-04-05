import { Injectable } from '@angular/core';
import { Post } from './../post-modelo/post-model';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

@Injectable()
export class PostService {
    url: string = "http://rest.learncode.academy/api/mariajesca/posts";
    
    constructor(private http: Http){ }
    // posts = [
    //      new Post(1, "Arya", "Texto aqui", 0),
    //      new Post(2, "Daenerys", "Texto aqui", 0)
    // ];
    posts: Post[] = [];

    deuLike = false;
    // maxId = 0;

    getPosts() {
        return this.http.get(this.url)
            .map((response: Response) => {
                for(let p of response.json()){
                    this.posts.push(new Post(p.id, p.nome_pessoa, p.texto, p.qtd_likes))
                }
                return this.posts;
            })
            .catch((error: Response) => Observable.throw(error))
    };

    addPost(post: Post){
        // this.posts.push(post);
        return this.http.post(this.url, post)
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error)) //por que é Observable.throw?
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