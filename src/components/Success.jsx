import React from 'react'
import berlin3 from './assets/berlin3.jpg'


function Success() {

  return (
    <div className="card w-96 border  mx-auto">
      <figure><img src={berlin3} alt="success" /></figure>
      <div className="card-body justify-self-center">
        <h2 className="card-title text-3xl place-content-center">Success</h2>
        <p className='text-center'>I will get back to you shortly</p>
      </div>
    </div>
  )
}

export default Success
