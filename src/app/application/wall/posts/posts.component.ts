import { Component, OnInit } from '@angular/core';
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
        private store: Store<fromStore.PostsState>
    ) {
    }

    ngOnInit() {
        this.posts$ = this.store.select(fromStore.getAllPosts)
        this.store.dispatch(new fromStore.GetPosts())
    }

    createComment() {
        console.log('post')
    }
}
