import React, { Component } from 'react';
import axios from "axios";
import ChildApi from  "./childApi";

class CallApi extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        axios.get("http://jsonplaceholder.typicode.com/posts")
            .then(response => {
                const posts = response.data.slice(0, 4)
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: "Max"
                    }
                })
                this.setState({ posts: updatedPosts })
            })
    }

    render() {
        return (
            <div>
                <div>
                {this.state.posts.map(post => <div>
                    <h5>{post.id}</h5>
                    <ChildApi title={post.title} />
                    <div>{post.body}</div>

                </div>)}
                </div>
                
            </div>
        );
    }
}

export default CallApi;