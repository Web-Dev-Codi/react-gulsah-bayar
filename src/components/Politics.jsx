import React from 'react'
import pageOneLeft from './assets/pageOneLeft.jpg'
import pageOneRight from './assets/pageOneRight.jpg'
import pageTwoLeft from './assets/pageTwoLeft.jpg'
import pageTwoRight from './assets/pageTwoRight.jpg'

function Politics() {
  return (

    <div className="flex justify-center">
      <div className="border border-neutral">
        <img className="px-1 py-1" src={pageOneRight} alt="pageOneRight" />
        <img className="px-1 py-1" src={pageOneLeft} alt="pageOneLeft" />
        <img className="px-1 py-1" src={pageTwoLeft} alt="pageTwoLeft" />
        <img className="px-1 py-1" src={pageTwoRight} alt="pageTwoRight" />
      </div>
    </div>

  )
}

export default Politics