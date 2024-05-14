"use client";
import React, { useEffect } from 'react';
import loadBackgroudImages from '@/common/loadBackgroudImages';

function Header({ content }) {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <header className="header-project1">
      <div className="container mt-100">
        <div className="row">
          <div className="col-lg-6 valign">
            <div className="full-width mb-30">
              <h1 className="fz-60">{content.title}</h1>
              <p>{content.description}</p>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1">
            <div className="info">
              <div className="row">
                <div className="col-md-6">
                  <div className="item mb-30">
                    <span className="opacity-8 mb-5">{content.details[0].label}</span>
                    <h6>{content.details[0].value}</h6>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="item mb-30">
                    <span className="opacity-8 mb-5">{content.details[1].label}</span>
                    <h6>{content.details[1].value}</h6>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="item mb-30">
                    <span className="opacity-8 mb-5">{content.details[2].label}</span>
                    <h6>{content.details[2].value}</h6>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="item">
                    <span className="opacity-8 mb-5">{content.details[3].label}</span>
                    <h6>{content.details[3].value}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-img mt-100" style={{ backgroundImage: `url(${content.backgroundImage})` }}></div>
    </header>
  );
}
export default Header;