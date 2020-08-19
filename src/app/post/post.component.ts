import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() postRef: Post;
  @Output() deleted = new EventEmitter<void>();

  constructor() { }

  // Go to corresponding HTML File and attach this event emitter. 
  deletePost() {
    this.deleted.emit(); // need to listen to this event on the parent - social-posts.
  }

  ngOnInit(): void {
  }

}
