// This file evaluates any actions that are committed (such as fetching posts
// and creating posts. For our actions, we create types -- see imported file below)

import { FETCH_POSTS, NEW_POST } from "../actions/types";

// In the postReducer, I want to create the initial state (which is an object)
const initialState = {
    // These items represent the posts that come in from the action (the fetch request)
    items: [],
    // This item represents the single post that we add
    item: {}
}

// This function evaluates what type we are dealing with. It takes in two things: the state and the action.
// The action will include a type.
export default function(state = initialState, action) {

    switch(action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                items: action.payload
            }
        default:
            return state;
    } 
}