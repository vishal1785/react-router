import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import { fetchPosts } from '../actions';

class PostsIndexComponent extends Component {

  componentDidMount(){
    this.props.fetchPosts();
  }

  renderPosts(){
    return _.map(this.props.posts, post => {
      return (
        <li className="list-group-item" key={post.id}> 
          <Link to={`/posts/${post.id}`}> { post.title} </Link>
        </li>
      );
    })
  }

  render() {
    return (
      <div>
        <h2 className="post-index-h2">Posts Lists</h2>
        <hr/>
        <div className="text-xs-right post-index-div">
          <Link className="btn btn-primary" to="/posts/new">
            Add Post
          </Link>
        </div>
        <ul className="list-group">
          { this.renderPosts() }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return { posts: state.posts}
}

export default connect(mapStateToProps,{fetchPosts})(PostsIndexComponent);
