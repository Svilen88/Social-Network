import { Action } from '@ngrx/store'

export const GET_COMMENTS = '[COMMENTS] Get All Comments'
export const GET_COMMENTS_FAIL = '[COMMENTS] Get All Comments Fail'
export const GET_COMMENTS_SUCCESS = '[COMMENTS] Get All Comments Success'

export class GetComments implements Action {
    readonly type = GET_COMMENTS
    constructor(public payload: any) { }
}

export class GetCommentsFail implements Action {
    readonly type = GET_COMMENTS_FAIL
    constructor(public payload: any) { }
}

export class GetCommentsSuccess implements Action {
    readonly type = GET_COMMENTS_SUCCESS
    constructor(public payload: any[]) { }
}

export type CommentsAction = GetComments | GetCommentsFail | GetCommentsSuccess