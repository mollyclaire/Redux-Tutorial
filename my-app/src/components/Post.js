import React from "react";

class Post extends React.Component {
constructor(props) {
    super(props)
    this.state= {
        posts: []
    }
}

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/posts")
        // This promise returns the response in json form
        .then (res => res.json())
        .then(data => this.setState({posts: data}))
    }

    render() {
        // Note that the variable declared here is return later as a JSX object (Note to self: review this with Everyday Art app)
        const postItems = this.state.posts.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ))
        return (
            <div>
                <h1>Posts</h1>
                {postItems}
            </div>
        )
    }
}

export default Post;