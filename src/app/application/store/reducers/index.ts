import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store'

import * as fromPosts from './posts.reducer'

export interface PostsState {
    posts: fromPosts.PostState
}

export const reducers: ActionReducerMap<PostsState> = {
    posts: fromPosts.reducer
}

export const getPostsState = createFeatureSelector<PostsState>('posts')
export const getPostState = createSelector(getPostsState, (state: PostsState) => state.posts)

export const getAllPosts = createSelector(getPostState, fromPosts.getPosts)
export const getLoaded = createSelector(getPostState, fromPosts.getPostsLoaded)
export const getLoading = createSelector(getPostState, fromPosts.getPostsLoaded)
