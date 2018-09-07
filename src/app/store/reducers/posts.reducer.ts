import { PostsState } from '../state/posts.state'
import { Post } from '../models/post.model'
import * as PostsActions from '../actions/posts.action'

export type Action = PostsActions.All

function getAllPosts(state, action) {
    return {
        ...state,
        action
    }
}

export function postsReducer(state: Post[], action: Action) {
    switch (action.type) {
        case PostsActions.GET_ALL_POSTS:
            return { ...state, loading: true }
        case PostsActions.GET_ALL_POSTS_SUCCESS:
            return { ...state, ...action.payload, loading: false }
        default:
            return state
    }
}
