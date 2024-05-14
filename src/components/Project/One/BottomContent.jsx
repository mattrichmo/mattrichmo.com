import React from 'react';
import PropTypes from 'prop-types';

function BottomContent({ content }) {
  return (
    <section className="section-padding bord-thin-top">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="text">
              <h2 className="mb-50">{content.title}</h2>
              <h5 className="mb-30 fw-400">{content.subtitle}</h5>
              <p className="fz-18">{content.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

BottomContent.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired
};

export default BottomContent;