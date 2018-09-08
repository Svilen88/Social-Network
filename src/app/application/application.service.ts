import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store'
import { AuthService } from '../auth/auth.service';
import * as firebase from 'firebase';
import { ToastrService } from 'ngx-toastr';
import { Observable, of } from 'rxjs';
import { Post } from './store/models/post.model';

@Injectable({
    providedIn: 'root'
})
export class ApplicationService {

    constructor(
        private authService: AuthService,
        private toastr: ToastrService
    ) { }

    createPost(body) {
        firebase.database()
            .ref('posts')
            .push(body)
    }

    createComment(body, postId) {
        firebase.database()
            .ref(`comments/${postId}`)
            .push(body)
    }

    // getAllCommentsForPost(postId) {
    //     console.log(postId)
    //     firebase.database()
    //         .ref(`comments/${postId}`)
    //         .once('value', snapshot => {
    //             // TODO
    //             const comments = { [postId]: snapshot.val() }
    //             this.store.dispatch(new GetCommentsForPost(comments))
    //         })
    // }

    getAllPosts(): Observable<Post[]> {
        const fdb = firebase.database()
            .ref('posts')
            .on('value', snapshot => {
                const posts: Post[] = []
                const keys = Object.keys(snapshot.val())
                for (const key of keys) {
                    posts.push({
                        [key]: snapshot.val()[key]
                    })
                }
                return posts
            })
        return of<Post[]>(fdb)
    }

    // private calcTime(dateIsoFormat) {
    //     let diff = new Date - (new Date(dateIsoFormat))
    //     diff = Math.floor(diff / 60000)
    //     if (diff < 1) {
    //         return 'less than a minute'
    //     }
    //     if (diff < 60) {
    //         return diff + ' minute' + pluralize(diff)
    //     }
    //     diff = Math.floor(diff / 60)
    //     if (diff < 24) {
    //         return diff + ' hour' + pluralize(diff); diff = Math.floor(diff / 24)
    //     }
    //     if (diff < 30) {
    //         return diff + ' day' + pluralize(diff); diff = Math.floor(diff / 30)
    //     }
    //     if (diff < 12) {
    //         return diff + ' month' + pluralize(diff); diff = Math.floor(diff / 12)
    //     }
    //     return diff + ' year' + pluralize(diff);

    //     function pluralize(value) {
    //         if (value !== 1) {
    //             return 's'
    //         } else {
    //             return ''
    //         }
    //     }
    // }

    getUserId() {
        return this.authService.getUserId()
    }
}
