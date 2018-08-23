import { PostsState } from '../state/posts.state'
import * as PostsActions from '../actions/posts.action'

function getAllPosts(state, action) {
    return {
        ...state,
        all: action
    }
}

function addNewPost(state, action) {
    return {
        all: [
            ...state.all,
            action
        ]
    }
}

export function postsReducer(state: PostsState = {all: {}, add: {}}, action: PostsActions.Types) {
    switch (action.type) {
        case PostsActions.GET_ALL_POSTS:
            return getAllPosts(state, action.payload)
        case PostsActions.ADD_NEW_POST:
            return addNewPost(state, action.payload)
        default:
            return false
    }
}
