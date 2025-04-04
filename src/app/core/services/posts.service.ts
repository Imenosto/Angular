import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


import {Observable} from 'rxjs';
import {Post} from '../models/post';
import {Commentaires} from '../models/commentaires';
import {User} from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  apiUrl = "https://jsonplaceholder.typicode.com/";
  constructor(private http : HttpClient) { }

  getPosts() : Observable<Array<Post>>{
    return this.http.get<Array<Post>>(this.apiUrl+'posts');
  }

  getPostComments(postId: number) :  Observable<Array<Commentaires>>{
    return this.http.get<Array<Commentaires>>(this.apiUrl+'comments?postId='+postId);
  }

  getPostDetails(id: number) :  Observable<Post>{
    return this.http.get<Post>(this.apiUrl+'posts/'+id);
  }


  createPost(post: Post) : Observable<any>{
    return this.http.post<any>(this.apiUrl+'posts', post);
  }
}
