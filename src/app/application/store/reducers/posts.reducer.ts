import * as fromPosts from '../actions/posts.action'
import { Post } from '../models/post.model'

export interface PostState {
    entities: { [id: string]: Post },
    loaded: boolean,
    loading: boolean
}

export const initialState: PostState = {
    entities: {},
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
            const posts = action.payload
            const entities = posts.reduce((entities: { [postId: string]: Post }, post: Post) => {
                return {
                    ...entities,
                    [post.postId]: post
                }
            }, {
                ...state.entities
            })
            return {
                ...state,
                loading: false,
                loaded: true,
                entities
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

export const getPosts = (state: PostState) => state.entities
export const getPostsLoading = (state: PostState) => state.loading
export const getPostsLoaded = (state: PostState) => state.loaded
