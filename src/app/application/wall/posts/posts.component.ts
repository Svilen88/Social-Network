import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../../application.service';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Post } from '../../store/models/post.model';

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
    posts$: Observable<Post[]>
    comment: string

    constructor(
        private applicationService: ApplicationService,
        private store: Store<fromStore.PostsState>
    ) {
    }

    ngOnInit() {
        this.store.dispatch(new fromStore.GetPosts())
        this.posts$ = this.store.select(fromStore.getAllPosts)
    }

    createComment(form: NgForm, postId) {
        // const date = new Date(Date.now()).toUTCString()
        // const commentBody = {
        //     time: {
        //         lmt: date,
        //         ect: date
        //     },
        //     uid: this.applicationService.getUserId(),
        //     author: localStorage.getItem('username'),
        //     comment: form.value[`comment`],
        // }
        // form.resetForm()
        // this.applicationService.createComment(commentBody, postId)
    }

    getComments(postId) {
    }
}
