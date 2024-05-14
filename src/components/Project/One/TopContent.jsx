import React from 'react';
import PropTypes from 'prop-types';

function TopContent({ content }) {
  return (
    <section className="section-padding bord-thin-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <h2 className="mb-50">{content.title}</h2>
          </div>
          <div className="col-lg-7">
            <div className="text">
              <h5 className="mb-30 fw-400 line-height-40">{content.subtitle}</h5>
              <p className="fz-18">{content.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

TopContent.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired
};

export default TopContent;