import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store'
import { AuthService } from '../auth/auth.service';
import { AppState } from '../store/app.state';
import * as firebase from 'firebase';
import { GetAllPosts } from '../store/actions/posts.action';
import { ToastrService } from 'ngx-toastr';

@Injectable({
    providedIn: 'root'
})
export class ApplicationService {

    constructor(
        private authService: AuthService,
        private store: Store<AppState>,
        private toastr: ToastrService
    ) { }

    createPost(body) {
        firebase.database()
            .ref('posts')
            .push(body)
    }

    createComment(body, postId) {
        console.log(postId)
        firebase.database()
            .ref(`comments/${postId}`)
            .push(body)
    }

    getAllCommentsForPost(postId) {
        console.log(postId)
        firebase.database()
            .ref(`comments/${postId}`)
            .once('value', snapshot => {
                console.log(snapshot.val())
            })
    }

    getAllPosts() {
        firebase.database()
            .ref('posts')
            .on('value', res => {
                if (res.val()) {
                    const ids = Object.keys(res.val())
                    const posts = []
                    for (const id of ids) {
                        const post = res.val()[id]
                        post.time.ect = this.calcTime(post.time['ect'])
                        post.time.lmt = this.calcTime(post.time['lmt'])
                        post.postId = id
                        posts.push(post)
                    }
                    this.store.dispatch(new GetAllPosts(posts))
                }
            })
    }

    private calcTime(dateIsoFormat) {
        let diff = new Date - (new Date(dateIsoFormat))
        diff = Math.floor(diff / 60000)
        if (diff < 1) {
            return 'less than a minute'
        }
        if (diff < 60) {
            return diff + ' minute' + pluralize(diff)
        }
        diff = Math.floor(diff / 60)
        if (diff < 24) {
            return diff + ' hour' + pluralize(diff); diff = Math.floor(diff / 24)
        }
        if (diff < 30) {
            return diff + ' day' + pluralize(diff); diff = Math.floor(diff / 30)
        }
        if (diff < 12) {
            return diff + ' month' + pluralize(diff); diff = Math.floor(diff / 12)
        }
        return diff + ' year' + pluralize(diff);

        function pluralize(value) {
            if (value !== 1) {
                return 's'
            } else {
                return ''
            }
        }
    }

    getUserId() {
        return this.authService.getUserId()
    }
}
