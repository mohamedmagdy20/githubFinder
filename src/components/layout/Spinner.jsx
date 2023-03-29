import React from 'react'
import spinner from './asset/spinner.gif'

const Spinner = () => {
  return (
    <div className='w-100 mt-20'>
        <img src={spinner} width={180} className="text-center mt-auto" alt="Loading ....." />      
    </div>
  )
}

export default Spinner
