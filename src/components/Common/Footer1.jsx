"use client";
import React, { useEffect } from 'react';

function Footer1({ subBg }) {
  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    () => window.removeEventListener('resize', handleResize);
  }, []);

  function handleResize() {
    if (window.innerWidth > 991) {
      gsap.set('.footer-container', { yPercent: -50 })
      const uncover = gsap.timeline({ paused: true })
      uncover.to('.footer-container', { yPercent: 0, ease: 'none' });

      ScrollTrigger.create({
        trigger: 'main',
        start: 'bottom bottom',
        end: '+=50%',
        animation: uncover,
        scrub: true,
      });
    }
  }

  return (
    <footer className={`${subBg ? 'sub-bg' : ''}`}>
      <div className="footer-container">
        <div className="container pb-80 pt-80 ontop">
          <div className="row">
            <div className="col-lg-6">
              <div className="eml">
                <h6 className="sub-title opacity-8">Let's Create Together.</h6>
                <h2 className="underline fz-60">
                  <a href="#0">hello@mattrichmo.com</a>
                </h2>
              </div>
            </div>
          </div>
          <div className="row mt-80">
            <div className="col-lg-3">
              <div className="logo">
                <img src="/assets/imgs/logo-light.png" alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="column">
                <h6 className="sub-title mb-30">Social Media</h6>
                <ul className="rest">
                  <li className="hover-this cursor-pointer">
                    <a href="https://facebook.com/mattrichmo" className="hover-anim">Facebook</a>
                  </li>
                  <li className="hover-this cursor-pointer">
                    <a href="https://instagram.com/mattrichmo" className="hover-anim">Instagram</a>
                  </li>
                  <li className="hover-this cursor-pointer">
                    <a href="https://www.pexels.com/@matt-r-314917881/" className="hover-anim">Pexels</a>
                  </li>
                  <li className="hover-this cursor-pointer">
                    <a href="https://unsplash.com/@mattrichmo" className="hover-anim">Unsplash</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="column">
                <h6 className="sub-title mb-30">Location:</h6>
                <p>Vancouver, BC, Canada</p>
                <h5 className="mt-15 underline">
                  <a href="#0">Willing To Travel</a>
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="container bord pt-30 pb-30 bord-thin-top">
          <div className="row">
            <div className="col-lg-6">
              <div className="links">
                <ul className="rest">
                  <li>
                    <a href="/about" className="animsition-link">FAQ</a>
                  </li>
                  <li>
                    <a href="/about" className="animsition-link">Careers</a>
                  </li>
                  <li>
                    <a href="/contact" className="animsition-link">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="copyright d-flex">
                <div className="ml-auto">
                  <p className="fz-13">© 2023 MattRichmo Photography - Created by Matt Richmond</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer1