import * as fromComments from '../actions/comments.action'
import { Comment } from '../models/comment.model'

export interface CommentState {
    entities: { [postId: string]: Comment },
    loaded: boolean,
    loading: boolean
}

export const initialState: CommentState = {
    entities: {},
    loaded: false,
    loading: false
}

export function reducer(state = initialState, action: fromComments.CommentsAction): CommentState {
    switch (action.type) {
        case fromComments.GET_COMMENTS: {
            return {
                ...state,
                loading: true
            }
        }
        case fromComments.GET_COMMENTS_SUCCESS: {
            const comments = action.payload
            const entities = comments.reduce((entities: { [postId: string]: { [commentId: string]: Comment } }, comment: Comment) => {
                return {
                    ...entities,
                    [comment.postId]: { [comment.commentId]: comment, ...entities[comment.postId] }
                }
            }, { ...state.entities })
            return {
                ...state,
                loading: false,
                loaded: true,
                entities
            }
        }
        case fromComments.GET_COMMENTS_FAIL: {
            return {
                ...state,
                loading: false,
                loaded: false
            }
        }
    }
    return state
}

export const getComments = (state: CommentState) => state.entities
export const getCommentsLoading = (state: CommentState) => state.loading
export const getCommentsLoaded = (state: CommentState) => state.loaded
