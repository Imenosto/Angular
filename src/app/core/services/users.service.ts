import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from '../models/post';
import {Commentaires} from '../models/commentaires';
import {User} from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  apiUrl = "https://jsonplaceholder.typicode.com/";
  constructor(private http : HttpClient) { }


  getUsersInformation(id: number) :  Observable<User>{
    return this.http.get<User>(this.apiUrl+'users/'+id);
  }

  getUsersPosts(id: number) :  Observable<Array<Post>>{
    return this.http.get<Array<Post>>(this.apiUrl+'users/'+id+'/posts');
  }

}
