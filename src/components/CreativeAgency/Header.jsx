import React from 'react';

function Header() {
  return (
    <header className="crev-header">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="caption text-center">
              <h1 className="f-xbold"><span className="f-ultra-light d-block">Photographer</span> For Hire</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="img mt-50">
        <img src="https://images.pexels.com/photos/17120939/pexels-photo-17120939/free-photo-of-bird-on-wire-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Bird on a wire in black and white" />
      </div>
    </header>
  )
}

export default Header