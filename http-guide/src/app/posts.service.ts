import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';

import { PostModel } from './post.model';

@Injectable({ providedIn: 'root' })
export class PostsService {
  myUrl = 'https://angularlearing.firebaseio.com/posts.json';
  error = new Subject<string>();

  constructor(private http: HttpClient) {}

  createAndStorePost(title: string, content: string) {
    const postData: PostModel = { title, content };
    this.http
      .post<{ name: string }>(
        this.myUrl,
        postData
      )
      .subscribe(
        responseData => {
          console.log(responseData);
        },
        error => {
          this.error.next(error.message);
        }
      );
  }

  fetchPosts() {
    return this.http
      .get<{ [key: string]: PostModel }>(
        this.myUrl
      )
      .pipe(
        map(responseData => {
          const postsArray: PostModel[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }
          return postsArray;
        }),
        catchError(errorRes => {
          // Send to analytics server
          return throwError(errorRes);
        })
      );
  }

  deletePosts() {
    return this.http.delete(
      this.myUrl
    );
  }
}
