import React from 'react'
import Post from './Post'

const posts = [
  {
    id: '123',
    username: 'captainlevi',
    userImg:
      'https://i.pinimg.com/736x/59/b3/56/59b3569f24106c678148d1ecaec16f08.jpg',
    img: 'https://i.pinimg.com/736x/59/b3/56/59b3569f24106c678148d1ecaec16f08.jpg',
    caption: 'Captain of the Scouts',
  },
  {
    id: '123',
    username: 'captainlevi',
    userImg:
      'https://i.pinimg.com/736x/59/b3/56/59b3569f24106c678148d1ecaec16f08.jpg',
    img: 'https://i.pinimg.com/736x/59/b3/56/59b3569f24106c678148d1ecaec16f08.jpg',
    caption: 'Captain of the Scouts',
  },
]

function Posts() {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  )
}

export default Posts
