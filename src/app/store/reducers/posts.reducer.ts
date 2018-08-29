import { PostsState } from '../state/posts.state'
import * as PostsActions from '../actions/posts.action'

function getAllPosts(state, action) {
    return {
        ...state,
        all: action
    }
}

function getAllCommentsForPost(state, action) {
    const key = Object.keys(action)[0]
    const stateAll = {...state.all}
    stateAll[key]['comments'] = action[key]
    return {
        ...state,
        all: stateAll
    }
}

export function postsReducer(state: PostsState = {all: {}}, action: PostsActions.Types) {
    switch (action.type) {
        case PostsActions.GET_ALL_POSTS:
            return getAllPosts(state, action.payload)
        case PostsActions.GET_COMMENTS_FOR_POST:
            return getAllCommentsForPost(state, action.payload)
        default:
            return false
    }
}
