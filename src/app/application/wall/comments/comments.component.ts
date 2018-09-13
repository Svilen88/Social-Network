import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';
import { Comment } from '../../store/models/comment.model';

@Component({
    selector: 'app-comments',
    templateUrl: './comments.component.html',
    styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit, OnDestroy {
    comments$: Observable<Comment[]>
    @Input('postId')
    postId: string
    constructor(
        private store: Store<fromStore.CommentsState>
    ) { }

    ngOnInit() {
        this.comments$ = this.store.select(fromStore.getAllComments(this.postId))
    }

    getComments() {
        this.store.dispatch(new fromStore.GetComments(this.postId))
    }
    ngOnDestroy() {
    }

}
