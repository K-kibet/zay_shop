import React from 'react'

function Error() {
  return (
      <div className="container-fluid bg-light py-5">
        <div className="col-md-6 m-auto text-center">
            <h1 className="h1 text-danger">404 <span >Error</span></h1>
            <p className='lead'>
                It seem the page you are looking for is not available
            </p>
        </div>
      </div>
  )
}

export default Error;