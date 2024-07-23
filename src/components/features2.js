import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './features2.css'

const Features2 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className="thq-section-padding">
      <div className="features2-container1 thq-section-max-width">
        <div className="features2-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="features2-tab-horizontal"
          >
            <div className="features2-divider-container">
              {activeTab === 0 && <div className="features2-container2"></div>}
            </div>
            <div className="features2-content">
              <h2 className="thq-heading-2">{props.feature1Title}</h2>
              <span className="thq-body-small">
                {props.feature1Description}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="features2-tab-horizontal1"
          >
            <div className="features2-divider-container1">
              {activeTab === 1 && <div className="features2-container3"></div>}
            </div>
            <div className="features2-content1">
              <h2 className="thq-heading-2">{props.feature2Title}</h2>
              <span className="thq-body-small">
                {props.feature2Description}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="features2-tab-horizontal2"
          >
            <div className="features2-divider-container2">
              {activeTab === 2 && <div className="features2-container4"></div>}
            </div>
            <div className="features2-content2">
              <h2 className="thq-heading-2">{props.feature3Title}</h2>
              <span className="thq-body-small">
                {props.feature3Description}
              </span>
            </div>
          </div>
        </div>
        <div className="features2-image-container">
          {activeTab === 0 && (
            <img
              alt={props.feature1ImgAlt}
              src={props.feature1ImgSrc}
              className="features2-image thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src={props.feature2ImgSrc}
              className="features2-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src={props.feature3ImgSrc}
              className="features2-image2 thq-img-ratio-16-9"
            />
          )}
        </div>
      </div>
    </div>
  )
}

Features2.defaultProps = {
  feature2Title: 'Easy Booking Process',
  feature1Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
  feature1ImgSrc:
    'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTc0Njk0Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1Title: 'Feature #1',
  feature3ImgAlt: 'image',
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1481487196290-c152efe083f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTc0Njk0N3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature3Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
  feature2Description:
    'Our restaurant booking website offers a simple and user-friendly booking process. With just a few clicks, you can secure your table at your favorite restaurant hassle-free.',
  feature3Title: 'Feature #3',
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1484627147104-f5197bcd6651?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTc0Njk0OHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1ImgAlt: 'feature 1',
  feature2ImgAlt: 'Illustration of easy booking process',
}

Features2.propTypes = {
  feature2Title: PropTypes.string,
  feature1Description: PropTypes.string,
  feature1ImgSrc: PropTypes.string,
  feature1Title: PropTypes.string,
  feature3ImgAlt: PropTypes.string,
  feature3ImgSrc: PropTypes.string,
  feature3Description: PropTypes.string,
  feature2Description: PropTypes.string,
  feature3Title: PropTypes.string,
  feature2ImgSrc: PropTypes.string,
  feature1ImgAlt: PropTypes.string,
  feature2ImgAlt: PropTypes.string,
}

export default Features2
