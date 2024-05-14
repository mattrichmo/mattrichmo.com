import React from 'react';
import PropTypes from 'prop-types';

function NextProject({ project }) {
  if (!project.nextProjectEnable) {
    return <div />;
  }

  return (
    <section className="next-project section-padding sub-bg">
      <div className="contact-container">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="text-center">
                <h6 className="sub-title fz-18">Next Project</h6>
                <div className="inline">
                  <div className="d-flex align-items-center">
                    <a href={project.href} className="animsition-link fz-70 fw-700 stroke">{project.title}</a>
                    <span className="ml-15">
                      <img src="/assets/imgs/svg-assets/arrow-right-top.svg" alt="" className="icon-img-70" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

NextProject.propTypes = {
  project: PropTypes.shape({
    href: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    nextProjectEnable: PropTypes.bool.isRequired,
  }).isRequired
};

export default NextProject;