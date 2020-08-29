import React, { Component } from 'react';

import api from '../../services/api';
//import AddPost from '../Form/index'

import topPost from '../../assets/bannerPost.png';
import { Repositories, Head } from '../Dashboard/styles';

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
    const { posts } = this.state
    const postId = posts.filter((posts) => {
      return posts.id <= 6;
    })
    return (
      <>
        <Head>
          <h1>Exibindo resultado de busca por "Covid 19"</h1>
          <h2>Encontramos um total de 20 resultados para sua Busca</h2>
        </Head>
        <Repositories>
          {postId.length ? postId.map(post => <div key={post.id}>
            <div class="column">
              <div class="card">
                <div class="thumb">
                  <img src={topPost} />
                </div>
                <div class="content">
                  <strong>{post.title}</strong>
                  <p>{post.body}</p>
                  <strong><a href="#">Ler mais</a></strong>
                </div>
              </div>
            </div>
          </div>) : null}
          <div class="vertical-menu">
            <strong>Categorias</strong>
            <a id="top" href="#">Lorem ipsum dolor</a>
            <hr />
            <a href="#">Lorem ipsum dolor</a>
            <hr />
            <a href="#">Lorem ipsum dolor</a>
            <hr />
            <a href="#">Lorem ipsum dolor</a>
            <hr />
            <strong>Procurando alguma notícia?</strong>
            <input type="text" name="name" placeholder="Pesquisar por..." />
            <a id="litlelink" href="#"><strong>Cadastrar</strong></a>
          </div>

        </Repositories>

      </>
    )
  }
  ///
}
export default PostList;