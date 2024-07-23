import React from 'react'

import PropTypes from 'prop-types'

import './testimonial.css'

const Testimonial = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial-max-width thq-section-max-width">
        <div className="testimonial-container">
          <h2 className="thq-heading-2">{props.heading1}</h2>
          <span className="testimonial-text01 thq-body-small">
            {props.content1}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card">
                <div className="testimonial-container02">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial-image"
                  />
                  <div className="testimonial-container03">
                    <strong className="thq-body-large">
                      {props.author1Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author1Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text04 thq-body-small">
                  {props.review1}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card1">
                <div className="testimonial-container04">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial-image1"
                  />
                  <div className="testimonial-container05">
                    <strong className="thq-body-large">
                      {props.author2Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author2Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text07 thq-body-small">
                  {props.review2}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card2">
                <div className="testimonial-container06">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial-image2"
                  />
                  <div className="testimonial-container07">
                    <strong className="thq-body-large">
                      {props.author3Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author3Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text10 thq-body-small">
                  {props.review3}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card3">
                <div className="testimonial-container08">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial-image3"
                  />
                  <div className="testimonial-container09">
                    <strong className="thq-body-large">
                      {props.author4Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author4Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text13 thq-body-small">
                  {props.review4}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial.defaultProps = {
  content1:
    'The restaurant exceeded my expectations. The food was delicious, and the service was impeccable.',
  author1Src:
    'https://images.unsplash.com/photo-1645378999488-63138abdecd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTc0Njk0NXw&ixlib=rb-4.0.3&q=80&w=1080',
  review2:
    'I had a wonderful dining experience at this restaurant. The ambiance was perfect, and the dishes were a delight to my taste buds.',
  author4Src:
    'https://images.unsplash.com/photo-1579783483458-83d02161294e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTc0Njk0Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  heading1: 'Testimonials',
  author1Name: 'John Smith',
  author2Src:
    'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTc0Njk0Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  author4Position: 'Event Planner',
  author3Alt: 'Image of Michael Brown',
  author3Src:
    'https://images.unsplash.com/photo-1611244420030-b22f359eee31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTc0Njk0Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  author1Alt: 'Image of John Smith',
  review1: '5 stars',
  review4:
    'I have hosted several events at this restaurant, and each time the team has delivered exceptional service and top-notch food.',
  author3Name: 'Michael Brown',
  author2Position: 'Food Blogger',
  author3Position: 'Regular Customer',
  author2Alt: 'Image of Emily Johnson',
  author4Alt: 'Image of Sarah Lee',
  author1Position: 'Food Critic',
  author2Name: 'Emily Johnson',
  author4Name: 'Sarah Lee',
  review3:
    'Great place for a family dinner. The staff was friendly, and the menu had a good variety of options.',
}

Testimonial.propTypes = {
  content1: PropTypes.string,
  author1Src: PropTypes.string,
  review2: PropTypes.string,
  author4Src: PropTypes.string,
  heading1: PropTypes.string,
  author1Name: PropTypes.string,
  author2Src: PropTypes.string,
  author4Position: PropTypes.string,
  author3Alt: PropTypes.string,
  author3Src: PropTypes.string,
  author1Alt: PropTypes.string,
  review1: PropTypes.string,
  review4: PropTypes.string,
  author3Name: PropTypes.string,
  author2Position: PropTypes.string,
  author3Position: PropTypes.string,
  author2Alt: PropTypes.string,
  author4Alt: PropTypes.string,
  author1Position: PropTypes.string,
  author2Name: PropTypes.string,
  author4Name: PropTypes.string,
  review3: PropTypes.string,
}

export default Testimonial
