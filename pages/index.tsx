import React from 'react'
import Header from '../components/Header'
import Form from '../components/Form'
import PostFeed from '../components/posts/PostFeed'

const Home = () => {
  return (
    <>
      <Header label="Home"/>
      <Form placeholder="what's happening?"/>
      <PostFeed />
    </>
  )
}

export default Home