import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import * as firebase from 'firebase';
import { ToastrService } from 'ngx-toastr';
import { Post } from './store/models/post.model';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Comment } from './store/models/comment.model';

@Injectable({
    providedIn: 'root'
})
export class ApplicationService {

    constructor(
        private authService: AuthService,
        private toastr: ToastrService,
        private db: AngularFireDatabase
    ) { }

    createPost(body: Post) {
        this.db.list('posts').push(body)
        this.getAllPosts()
    }

    createComment(body, postId) {
        firebase.database()
            .ref(`comments/${postId}`)
            .push(body)
    }

    getAllCommentsForPost(postId): Observable<Comment[]> {
        return this.db.list(`comments/${postId}`)
            .snapshotChanges()
            .pipe(
                map(a => a.map(b => {
                    const comment: Comment = { author: '', authorId: '', comment: '', postId: '', commentId: '' }
                    const keys = Object.keys(b.payload.val())
                    for (const key of keys) {
                        comment[key] = b.payload.val()[key]
                    }
                    return comment
                }))
            )
    }

    getAllPosts(): Observable<Post[]> {
        return this.db.list('posts')
            .snapshotChanges()
            .pipe(
                map(a =>
                    a.map(b => {
                        const post: Post = { author: '', post: '', postId: '', time: { ect: '', lmt: '' }, uid: '' }
                        const keys = Object.keys(b.payload.val())
                        for (const key of keys) {
                            post[key] = b.payload.val()[key]
                        }
                        post.postId = b.key
                        return post
                    })
                )
            )
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
