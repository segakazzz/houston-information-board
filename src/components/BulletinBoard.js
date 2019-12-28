import React from 'react'
import BulletinBoardPosts from './BulletinBoardPosts'
import BulletinBoardForm from './BulletinBoardForm'


const BulletinBoard = () => {
  return (
    <div>
      <BulletinBoardForm />
      <BulletinBoardPosts />
    </div>
  )
}

export default BulletinBoard
