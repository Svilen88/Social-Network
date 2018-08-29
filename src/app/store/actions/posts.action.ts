import { Action } from '@ngrx/store'

export const GET_ALL_POSTS = '[POSTS] Get All'
export const GET_COMMENTS_FOR_POST = '[COMMENTS] Get All'

export class GetAllPosts implements Action {
    readonly type = GET_ALL_POSTS
    constructor(public payload: any) { }
}

export class GetCommentsForPost implements Action {
    readonly type = GET_COMMENTS_FOR_POST
    constructor(public payload: any) { }
}

export type Types = GetAllPosts  | GetCommentsForPost
