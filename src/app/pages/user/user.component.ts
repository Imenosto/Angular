import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {User} from '../../core/models/users';
import {Post} from '../../core/models/post';
import {UsersService} from '../../core/services/users.service';

@Component({
  selector: 'app-user',
  imports: [
    RouterLink
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  id: number = 0;
  user: User | null = null;
  posts: Post[] = [];

  constructor(private route: ActivatedRoute, private postsService: UsersService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
    this.id = +params['id'];
    });
    this.postsService.getUsersInformation(this.id).subscribe(data => {
      this.user = data;
    });
    this.postsService.getUsersPosts(this.id).subscribe(data => {
      this.posts = data;
    });

  }
}
