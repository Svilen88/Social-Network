import { Action } from '@ngrx/store'


export const GET_ALL_POSTS = '[POSTS] Get All'
export const ADD_NEW_POST = '[POSTS] To Add'

export class GetAllPosts implements Action {
    readonly type = GET_ALL_POSTS
    constructor(public payload: any) { }
}

export class AddNewPost implements Action {
    readonly type = ADD_NEW_POST
    constructor(public payload: any) { }
}

export type Types = GetAllPosts | AddNewPost
