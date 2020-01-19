import React, { Component } from "react";
import axios from "axios";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }
  componentDidMount() {
    axios.get("/api/posts").then(res => {
      this.setState({ posts: res.data.posts });
    });
  }
  render() {
    return (
      <div>
        {this.state.posts.map(post => (
          <div key={post.id}>{post.title}</div>
        ))}
      </div>
    );
  }
}

export default Home;
