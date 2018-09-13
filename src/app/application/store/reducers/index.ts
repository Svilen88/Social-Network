import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store'

import * as fromPosts from './posts.reducer'
import * as fromComments from './comments.reducer'

export interface PostsState {
    posts: fromPosts.PostState
}

export interface CommentsState {
    comments: fromComments.CommentState
}

export const postsReducers: ActionReducerMap<PostsState> = {
    posts: fromPosts.reducer
}

export const commentsReducers: ActionReducerMap<CommentsState> = {
    comments: fromComments.reducer
}

export const getPostsState = createFeatureSelector<PostsState>('posts')
export const getCommentsState = createFeatureSelector<CommentsState>('comments')

export const getPostState = createSelector(getPostsState, (state: PostsState) => {
    return state.posts
})
export const getCommentState = createSelector(getCommentsState, (state: CommentsState) => {
    return state.comments
})

export const getAllPostEntities = createSelector(getPostState, fromPosts.getPosts)
export const getAllPosts = createSelector(
    getAllPostEntities,
    (entities) => {
        return Object.keys(entities).map(postId => entities[postId])
    }
)
export const getLoadedPosts = createSelector(getPostState, fromPosts.getPostsLoaded)
export const getLoadingPosts = createSelector(getPostState, fromPosts.getPostsLoaded)

export const getLoadedComments = createSelector(getCommentState, fromComments.getCommentsLoaded)
export const getLoadingComments = createSelector(getCommentState, fromComments.getCommentsLoading)

export const getAllCommentEntities = createSelector(getCommentState, fromComments.getComments)
    export const getAllComments = (postId) => createSelector(
    getAllCommentEntities,
    (entities) => {
        if (!entities[postId]) {
            return []
        }
        return Object.keys(entities[postId]).map(commentId => entities[postId][commentId])
    }
)
