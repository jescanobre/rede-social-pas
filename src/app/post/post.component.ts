import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() amigo:string;
  @Input() post:string;
}
