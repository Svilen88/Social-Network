import { Injectable } from '@angular/core'

import { Effect, Actions } from '@ngrx/effects'
import { of } from 'rxjs'
import { map, switchMap, catchError } from 'rxjs/operators'

import * as commentActions from '../actions'
import { ApplicationService } from '../../application.service';

@Injectable()
export class CommentsEffects {
    constructor(private actions$: Actions, private applicationService: ApplicationService) { }

    @Effect()
    loadComments$ = this.actions$.ofType(commentActions.GET_COMMENTS)
        .pipe(
            switchMap((action: commentActions.GetComments) => {
                return this.applicationService.getAllCommentsForPost(action.payload).pipe(
                    map(comments => new commentActions.GetCommentsSuccess(comments)),
                    catchError(err => of(new commentActions.GetCommentsFail(err)))
                )
            })
        )
}