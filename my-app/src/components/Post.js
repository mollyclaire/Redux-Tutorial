import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postActions";

class Post extends React.Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.newPost) {
            // unshift will add the new post to the top of the list
            this.props.posts.unshift(nextProps.newPost);
        }
    }

    render() {
        // Note that the variable declared here is return later as a JSX object (Note to self: review this with Everyday Art app)
        const postItems = this.props.posts.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ));
        return (
            <div>
                <h1>Posts</h1>
                {postItems}
            </div>
        )
    }
}

Post.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object
}

// Mapping the items from the state to the posts property 
const mapStateToProps = state => ({
    // posts is called posts here, because that's what it is set to in the root reducer
    posts: state.posts.items,
    newPost: state.posts.item
})

export default connect(mapStateToProps, { fetchPosts })(Post);