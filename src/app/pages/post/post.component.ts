import {Component, Input} from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {PostsService} from '../../core/services/posts.service';
import {Post} from '../../core/models/post';
import {Commentaires} from '../../core/models/commentaires';

@Component({
  selector: 'app-post',
  imports: [
    RouterLink
  ],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  id = 0;
  post: Post | null = null;
  comments: Array<Commentaires> = [];


  constructor(private route: ActivatedRoute, private postsService: PostsService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    })
    this.postsService.getPostComments(this.id).subscribe(data => {
      if(data){
        this.comments = data;
      }
    });
    this.postsService.getPostDetails(this.id).subscribe(data => {
      if(data){
        this.post = data;
      }
    });


  }

}
