import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../../application.service';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../store/app.state';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
    posts$: Observable<any[]>
    comment: string

    constructor(
        private applicationService: ApplicationService,
        private store: Store<AppState>
    ) {
        this.store.pipe(select('posts')).subscribe((state) => this.posts$ = state)
    }

    ngOnInit() {
        this.applicationService.getAllPosts()
    }

    createComment(form: NgForm, postId) {
        const date = new Date(Date.now()).toUTCString()
        const commentBody = {
            time: {
                lmt: date,
                ect: date
            },
            uid: this.applicationService.getUserId(),
            author: localStorage.getItem('username'),
            comment: form.value[`comment`],
        }
        form.resetForm()
        this.applicationService.createComment(commentBody, postId)
    }

    getComments(postId) {
        this.applicationService.getAllCommentsForPost(postId)
    }
}
