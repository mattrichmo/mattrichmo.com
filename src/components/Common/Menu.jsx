"use client";
import React from 'react';

function Menu() {
  function closeMenu() {
    document.querySelector('.hamenu').classList.remove("open");
  }

  function handleMouseEnter(event) {
    Object.values(event.currentTarget.parentElement.children).forEach(el => el.style.opacity = "0.5");
    event.currentTarget.style.opacity = "1";
  }

  function handleMouseLeave(event) {
    Object.values(event.currentTarget.parentElement.children).forEach(el => el.style.opacity = "1");
  }

  function handleOpenDMenu(event) {
    document.querySelector(".main-menu").classList.add("gosub");
    event.currentTarget.parentElement.parentElement.querySelector(".sub-menu").classList.add("sub-open");
  }

  function handleCloseDMenu() {
    document.querySelector(".main-menu").classList.remove("gosub");
    document.querySelector(".main-menu .sub-menu").classList.remove("sub-open");
  }

  return (
    <div className="hamenu valign">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="menu-links">
              <ul className="main-menu rest">
              <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                  <div className="o-hidden">
                    <a href="/" className="link animsition-link" onClick={closeMenu}><span className="nm">01.</span>Home</a>
                  </div>
                </li>
                <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                  <div className="o-hidden">
                    <span className="link dmenu" onClick={handleOpenDMenu}><span className="nm">02.</span>Portfolio </span>
                  </div>
                  <div className="sub-menu">
                    <ul className="rest">
                      <li>
                        <div className="o-hidden">
                          <span className="sub-link back" onClick={handleCloseDMenu}><i className="pe-7s-angle-left"></i> Go Back</span>
                        </div>
                      </li>
                    </ul>
                    <ul className="rest">
                      <li>
                        <div className="o-hidden">
                          <a href="/" className="sub-link animsition-link" onClick={closeMenu}></a>
                        </div>
                      </li>
                      <li>
                        <div className="o-hidden">
                          <a href="/wood-whispers"
                            className="sub-link animsition-link" onClick={closeMenu}>Wood Whisper</a>
                        </div>
                      </li>
                      <li>
                        <div className="o-hidden">
                          <a href="/plant-textures" className="sub-link animsition-link" onClick={closeMenu}>Plant Textures</a>
                        </div>
                      </li>
                        <li>
                        <div className="o-hidden">
                          <a href="/crow-love" className="sub-link animsition-link" onClick={closeMenu}>Crow Love</a>
                        </div>
                      </li>
        
                      <li>
                        <div className="o-hidden">
                          <a href="/Industrial-Textures" className="sub-link animsition-link" onClick={closeMenu}>Industrial Textures</a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                  <div className="o-hidden">
                    <a href="/about" className="link animsition-link" onClick={closeMenu}><span className="nm">03.</span>About</a>
                  </div>

                </li>
                <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                  <div className="o-hidden">
                    <a href="/contact" className="link animsition-link" onClick={closeMenu}><span className="nm">04.</span>Contact</a>
                  </div>
                  
                </li>
                
              </ul>
            </div>
          </div>
          
          <div className="col-lg-4 valign">
            <div className="cont-info">
              <div className="item mb-50">
                <h6 className="text-u fw-600 mb-20">Location</h6>
                <p className="fw-400 fz-18">Vancouver, BC</p>
              </div>
              <div className="item mb-50">
                <h6 className="text-u fw-600 mb-20">How to Connect</h6>
                <p className="fw-400 fz-18"></p>
                <p className="fw-400 fz-18">hello@mattrichmo.com</p>
              </div>
              <div className="bottom">
                <h6 className="text-u fw-600 mb-20">Follow Me</h6>
                <ul className="rest social-text d-flex fz-13">
                  <li className="mr-20">
                    <a href="https://facebook.com/mattrichmo" target="_blank"  className="hover-this"><span className="hover-anim">Facebook</span></a>
                  </li>
                  <li className="mr-20">
                    <a href="https://instagram.com/mattricho" target="_blank"  className="hover-this"><span className="hover-anim">Instagram</span></a>
                  </li>
                  <li className="mr-20">
                    <a href="https://www.pexels.com/@matt-r-314917881/" target="_blank" className="hover-this"><span className="hover-anim">Pexels</span></a>
                  </li>
                  <li>
                    <a href="https://unsplash.com/@mattrichmo" target="_blank"  className="hover-this"><span className="hover-anim">Unsplash</span></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu