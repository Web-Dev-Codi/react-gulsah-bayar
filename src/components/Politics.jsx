import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import pageOneLeft from './assets/pageOneLeft.jpg'
import pageOneRight from './assets/pageOneRight.jpg'
import pageTwoLeft from './assets/pageTwoLeft.jpg'
import pageTwoRight from './assets/pageTwoRight.jpg'

function Politics() {
  return (

    <div className="flex flex-col justify-center">
      <div className="self-center">
        <img className="px-1 py-1" src={pageOneRight} alt="pageOneRight" />
        <img className="px-1 py-1" src={pageOneLeft} alt="pageOneLeft" />
        <img className="px-1 py-1" src={pageTwoLeft} alt="pageTwoLeft" />
        <img className="px-1 py-1" src={pageTwoRight} alt="pageTwoRight" />
      </div>
      <div className="self-center mt-2">
        <Link to='/' className="btn btn-base-100 btn-sm w-36 p-1">
          <FontAwesomeIcon className="mr-1 " icon={faArrowLeft} />
          Back To Home
        </Link>
      </div>
    </div>

  )
}

export default Politics