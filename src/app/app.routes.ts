import { Routes } from '@angular/router';
import {FeedComponent} from './pages/feed/feed.component';
import {PostComponent} from './pages/post/post.component';
import {UserComponent} from './pages/user/user.component';
import {CreatePostComponent} from './pages/create-post/create-post.component';
import {LoginComponent} from './pages/login/login.component';
import {authGuard} from './core/guards/auth.guard';
import {ProfilInfoComponent} from './pages/profil-info/profil-info.component';

export const routes: Routes = [
  { path: '', component: FeedComponent },
  { path: 'post/:id', component: PostComponent },
  { path: 'users/:id/posts', component: UserComponent },
  { path: 'create-post', component: CreatePostComponent },
  { path: 'login', component: LoginComponent },
  {path: 'profile', canActivate: [authGuard], component: ProfilInfoComponent}

];
