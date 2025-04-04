import { Component } from '@angular/core';
import {Post} from '../../core/models/post';
import {HttpClient} from '@angular/common/http';
import {PostsService} from '../../core/services/posts.service';
import {RouterLink} from '@angular/router';
import {PostComponent} from '../post/post.component';

@Component({
  selector: 'app-feed',
  imports: [
    RouterLink,
    PostComponent
  ],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.css'
})
export class FeedComponent {

  posts : Array<Post> = [];
  constructor(private postService : PostsService, private http : HttpClient) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(
      (posts : Array<Post>) => this.posts = posts
    );
  }
}
