import * as fromPosts from '../actions/posts.action'
import { Post } from '../models/post.model'

export interface PostState {
    data: Post[],
    loaded: boolean,
    loading: boolean
}

export const initialState: PostState = {
    data: [],
    loaded: false,
    loading: false
}

export function reducer(state = initialState, action: fromPosts.PostsAction): PostState {
    switch (action.type) {
        case fromPosts.GET_POSTS: {
            return {
                ...state,
                loading: true
            }
        }
        case fromPosts.GET_POSTS_SUCCESS: {
            const data = action.payload
            return {
                ...state,
                loading: false,
                loaded: true,
                data
            }
        }
        case fromPosts.GET_POSTS_FAIL: {
            return {
                ...state,
                loading: false,
                loaded: false
            }
        }
    }
    return state
}

export const getPostsLoading = (state: PostState) => state.loading
export const getPostsLoaded = (state: PostState) => state.loaded
export const getPosts = (state: PostState) => state.data
