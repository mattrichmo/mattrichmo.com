import React from 'react';

function About({ aboutContent }) {
  return (
    <section className="about section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-11">
            <span className="sub-title bord mb-30 ">{aboutContent.subTitle}</span>
            <h3 className="text-center">{aboutContent.description}</h3>
          </div>
          <div className="col-lg-11">
            <div className="mt-50">
              {aboutContent.text.map((paragraph, index) => (
                <p className={index !== 0 ? "mt-40 text-xs  text-center" : ""} key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;