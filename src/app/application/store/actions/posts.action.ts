import { Action } from '@ngrx/store'
import { Post } from '../models/post.model';

export const GET_POSTS = '[POSTS] Get All Posts'
export const GET_POSTS_FAIL = '[POSTS] Get All Posts Fail'
export const GET_POSTS_SUCCESS = '[POSTS] Get All Posts Success'

export class GetPosts implements Action {
    readonly type = GET_POSTS
}

export class GetPostsFail implements Action {
    readonly type = GET_POSTS_FAIL
    constructor(public payload: any) { }
}

export class GetPostsSuccess implements Action {
    readonly type = GET_POSTS_SUCCESS
    constructor(public payload: Post[]) { }
}

export type PostsAction = GetPosts | GetPostsFail | GetPostsSuccess
