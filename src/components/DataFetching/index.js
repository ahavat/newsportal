import React, { useState, useEffect, Component } from 'react';
import api from '../../services/api';

//import { Container } from './styles';

class PostList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      erroMsg: ''
    }
  }
  componentDidMount() {
    api.get('/')
      .then(res => {
        console.log(res)
        this.setState({ posts: res.data })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    const { posts, erroMsg } = this.state
    const postId = posts.filter((posts) => {
      return posts.id <= 8;
    })
    return (
      <>
        < div >
          {
            postId.length ?
              postId.map(post => <div key={post.id}>{post.titles}</ div>) :
              null
          }
        </div >

      </>
    )
  }
}

export default PostList;