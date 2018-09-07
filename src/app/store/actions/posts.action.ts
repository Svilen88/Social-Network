import { Action } from '@ngrx/store'
import { Post } from 'src/app/store/models/post.model';

export const GET_ALL_POSTS = '[POSTS] Get All'
export const GET_ALL_POSTS_SUCCESS = '[POSTS] Get All Success'

export class GetAllPosts implements Action {
    readonly type = GET_ALL_POSTS
    constructor(public payload: string) { }
}

export class GetAllPostsSuccess implements Action {
    readonly type = GET_ALL_POSTS_SUCCESS
    constructor(public payload: Post[]) { }
}

export type All = GetAllPosts | GetAllPostsSuccess
