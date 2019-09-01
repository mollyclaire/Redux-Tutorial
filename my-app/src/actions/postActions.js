import { FETCH_POSTS, NEW_POST } from "./types";

// This function is doing what the componentDidMount function was doing (with just plain React)
export function fetchPosts() {
    // The thunk middleware allows us to call the dispatch function directly, so that we can make ascync requests.
    // dispatch is sort of like a promise
    return function(dispatch) {
        fetch("https://jsonplaceholder.typicode.com/posts")
        // This promise returns the response in json form
        .then (res => res.json())
        // Dispatching to the reducer
        .then(posts => dispatch({
            type: FETCH_POSTS,
            // payload is just a good variable name for the data that comes in to the type reducer
            payload: posts
        }));
    };
};

export const createPost = (postData) => dispatch => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(postData)
    })
        .then(res => res.json())
        .then(post => dispatch({
            type: NEW_POST,
            payload: post
        }));
    
};

