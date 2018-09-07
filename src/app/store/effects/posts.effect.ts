import { Injectable } from '@angular/core'
import { Effect, Actions } from '@ngrx/effects'
import { ApplicationService } from '../../application/application.service'

import { of } from 'rxjs'
import { Observable } from 'rxjs'

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/delay'

import * as postsActions from '../actions/posts.action'

export type Action = postsActions.All

@Injectable()
export class PostsEffects {
    constructor(private actions: Actions, private applicationService: ApplicationService) { }

    @Effect()
    getPosts: Observable<Action> = this.actions.ofType(postsActions.GET_ALL_POSTS)
        .map((action: postsActions.GetAllPosts) => action.payload)
        .delay(2000)
        .map(posts => {
            console.log(posts)
            return new postsActions.GetAllPostsSuccess(posts)
        })
}
