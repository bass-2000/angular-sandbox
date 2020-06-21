import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {Subject, throwError} from 'rxjs';

import {PostModel} from './post.model';

@Injectable({providedIn: 'root'})
export class PostsService {
  myUrl = 'https://angularlearing.firebaseio.com/posts.json';
  error = new Subject<string>();

  constructor(private http: HttpClient) {
  }

  createAndStorePost(title: string, content: string) {
    const postData: PostModel = {title, content};
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
    let searchParams = new HttpParams();
    searchParams = searchParams.append('print', 'pretty');
    searchParams = searchParams.append('curstom', 'key');
    return this.http
      .get<{ [key: string]: PostModel }>(
        this.myUrl,
        {
          headers: new HttpHeaders({
            'Custom-Header': 'Hello'
          }),
          params: searchParams
        }
      )
      .pipe(
        map(responseData => {
          const postsArray: PostModel[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({...responseData[key], id: key});
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
