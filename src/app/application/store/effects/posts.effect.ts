import { Injectable } from '@angular/core'

import { Effect, Actions } from '@ngrx/effects'
import { of } from 'rxjs'
import { map, switchMap, catchError } from 'rxjs/operators'

import * as postActions from '../actions'
import { ApplicationService } from '../../application.service';

@Injectable()
export class PostsEffects {
    constructor(private actions$: Actions, private applicationService: ApplicationService) { }

    @Effect()
    loadPosts$ = this.actions$.ofType(postActions.GET_POSTS)
        .pipe(
            switchMap(() => {
                return this.applicationService.getAllPosts().pipe(
                    map(posts => new postActions.GetPostsSuccess(posts)),
                    catchError(err => of(new postActions.GetPostsFail(err)))
                )
            })
        )
}