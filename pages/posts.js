import React, { Component } from "react";
import { getPosts } from "../actions/index";
class Posts extends Component {
  static async getInitialProps() {
    const posts = await getPosts();

    return { posts };
  }
  render() {
    const { posts } = this.props;
    return (
      <div className="container">
        <h1>Im a post</h1>
        {posts.map((post) => {
          return (
            <div key={post.id}>
              <ul>
                <li>{post.title}</li>
              </ul>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Posts;
