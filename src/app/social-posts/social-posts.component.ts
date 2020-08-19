import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../interfaces/post';
import { _ParseAST } from '@angular/compiler';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit {
  posts: Post[] = [
    {
      title: 'Hello',
      thought: 'bye bye',
    },
    {
      title: 'Hello',
      thought: 'bye bye',
    },
    {
      title: 'Hello',
      thought: 'bye bye',
    },
    {
      title: 'Hello',
      thought: 'bye bye',
    },
  ]

  showForm: boolean = false;

  constructor() { }

  onSubmit (post: Post) {
    this.posts.unshift(post);
    this.toggleForm();
  }

  //this below is a method that needs an index in order to remove a post at that specified index. This is necessary in order for the parent to hear the delete button being clicked and for something to be removed.
  // need to then go to corresponding html file to use it.
  onDelete(index: number) {
    this.posts.splice(index, 1);
  }

  toggleForm() {
    !this.showForm === !this.showForm;
  }
  ngOnInit(): void {
  }

}
