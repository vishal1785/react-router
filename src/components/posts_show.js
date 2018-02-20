import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchPostById,deletePost } from '../actions';

class PostsShowComponent extends Component {

  componentDidMount(){
    // chk if posts already exist  
    if(!this.props.post){
        const postIdFromURL = this.props.match.params.id;  
        this.props.fetchPostById(postIdFromURL);
    }
  }

  onDeletePost(postId){
    this.props.deletePost(postId, () => {
        console.log('item deltd frm server');
        this.props.history.push('/')
    });
  }

  render() {
    const {post} = this.props;

    if(!post){
        return <div>Loading...</div>
    }

    return (
      <div>
        <div className="post-show">
        <Link to="/">Back To Posts</Link>
        <button onClick={this.onDeletePost.bind(this,post.id)} className="btn btn-danger pull-xs-right">Delete</button>
        </div>
        <hr/>
        <h3>{post.title} </h3>
        <h6>Category: {post.categories}</h6>
        <p>{post.content}</p>
        
      </div>
    );
  }
}

function mapStateToProps({posts}, ownProps){
  return { post: posts[ownProps.match.params.id] }
}

export default connect(mapStateToProps,{fetchPostById,deletePost})(PostsShowComponent);
