import { Component } from '@angular/core';
import {FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgClass} from '@angular/common';
import {PostsService} from '../../core/services/posts.service';

@Component({
  selector: 'app-create-post',
  imports: [
    ReactiveFormsModule,
    NgClass
  ],
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.css'
})
export class CreatePostComponent {

  constructor(private postService: PostsService) {}

  postForm: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    body: new FormControl('', Validators.required),
    comments: new FormArray<FormControl<string | null>>([
      new FormControl('', Validators.required)
    ])
  });
  submit : boolean = false;


  get title() {
    return this.postForm.get('title') as FormControl;
  }

  get body() {
    return this.postForm.get('body') as FormControl;
  }

  get comments(): FormArray<FormControl<string | null>> {
    return this.postForm.get('comments') as FormArray<FormControl<string | null>>;
  }


  onSubmit(){
    if (this.postForm.invalid) {
      this.submit = true;
    }
    else {
      const postData = this.postForm.value;
      this.postService.createPost(postData).subscribe((response) => {
        console.log(this.postForm.value);
      });
    }
  }

  addComment(): void {
    this.comments.push(new FormControl('', Validators.required));
  }

  removeComment(i: number): void {
    if (this.comments.length > 1) {
      this.comments.removeAt(i);
    }
  }
}
