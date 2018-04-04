import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { NgModel } from '@angular/forms';
import { Post } from './../post-modelo/post-model';

@Component({
  selector: 'app-post-input',
  templateUrl: './post-input.component.html',
  styleUrls: ['./post-input.component.css']
})
export class PostInputComponent implements OnInit {
  
  id: Number;
  nomeInput: String= "";
  textoInput: String= "";   

  constructor (private postService:PostService) {}
 
  ngOnInit() {
  }

  onSubmit(event){
    event.preventDefault();
    this.postService.addPost (new Post(this.id, this.nomeInput, this.textoInput, 0));
  }
}
