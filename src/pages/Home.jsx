import React from 'react'
import UserResults from '../components/users/UserResults'
import UserSearch from '../components/users/UserSearch'
const Home = () => {
  return (
    <div>
      <h1 className='text-6xl'>
        
        <UserSearch/>
        {/* Search Component */}

        <UserResults/>
        </h1>
    </div>
  )
}
export default Home
