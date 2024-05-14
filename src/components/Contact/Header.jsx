import React from 'react';

function Header({ headerContent }) {
  return (
    <header className="contact-header section-padding">
      <div className="container mt-100">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="cont text-center mb-80">
              <h6 className="sub-title mb-15">
                <span className="icon-img-30 mr-10">
                  <img src={headerContent.iconSrc} alt={headerContent.iconAlt} />
                </span> 
                {headerContent.subTitle}
              </h6>
              <h1>{headerContent.title}</h1>
            </div>
          </div>
          <div className="col-lg-11">
            <div className="image-container">
              <img src={headerContent.imageSrc} alt={headerContent.imageAlt} />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;