import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './pricing.css'

const Pricing = (props) => {
  const [isMonthly, setIsMonthly] = useState(true)
  return (
    <div className="pricing-pricing23 thq-section-padding">
      <div className="pricing-max-width thq-section-max-width">
        <div className="pricing-section-title">
          <span className="pricing-text thq-body-small">{props.content1}</span>
          <div className="pricing-content">
            <h2 className="pricing-text01 thq-heading-2">{props.heading1}</h2>
            <p className="pricing-text02 thq-body-large">{props.content2}</p>
          </div>
        </div>
        <div className="pricing-tabs">
          {isMonthly && (
            <button
              onClick={() => setIsMonthly(true)}
              className="pricing-button thq-button-animated thq-button-filled"
            >
              <span className="thq-body-small">Monthly</span>
            </button>
          )}
          {!isMonthly && (
            <button
              onClick={() => setIsMonthly(true)}
              className="pricing-button01 thq-button-animated thq-button-outline"
            >
              <span className="thq-body-small">Monthly</span>
            </button>
          )}
          {!isMonthly && (
            <button
              onClick={() => setIsMonthly(false)}
              className="pricing-button02 thq-button-animated thq-button-filled"
            >
              <span className="thq-body-small">Yearly</span>
            </button>
          )}
          {isMonthly && (
            <button
              onClick={() => setIsMonthly(false)}
              className="pricing-button03 thq-button-animated thq-button-outline"
            >
              <span className="thq-body-small">Yearly</span>
            </button>
          )}
        </div>
        {isMonthly && (
          <div className="pricing-container">
            <div className="pricing-column thq-card">
              <div className="pricing-price">
                <div className="pricing-price01">
                  <p className="pricing-text07 thq-body-large">{props.plan1}</p>
                  <h3 className="pricing-text08 thq-heading-3">
                    {props.plan1Price}
                  </h3>
                  <p className="thq-body-large">{props.plan1Yearly}</p>
                </div>
                <div className="pricing-list">
                  <div className="pricing-list-item">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature1}
                    </span>
                  </div>
                  <div className="pricing-list-item01">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature2}
                    </span>
                  </div>
                  <div className="pricing-list-item02">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature3}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing-button04 thq-button-animated thq-button-outline">
                <span className="thq-body-small">{props.plan1Action}</span>
              </button>
            </div>
            <div className="pricing-column1 thq-card">
              <div className="pricing-price02">
                <div className="pricing-price03">
                  <p className="pricing-text14 thq-body-large">{props.plan2}</p>
                  <h3 className="pricing-text15 thq-heading-3">
                    {props.plan2Price}
                  </h3>
                  <p className="thq-body-large">{props.plan2Yearly}</p>
                </div>
                <div className="pricing-list1">
                  <div className="pricing-list-item03">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature1}
                    </span>
                  </div>
                  <div className="pricing-list-item04">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature2}
                    </span>
                  </div>
                  <div className="pricing-list-item05">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature3}
                    </span>
                  </div>
                  <div className="pricing-list-item06">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature4}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing-button05 thq-button-animated thq-button-filled">
                <span className="thq-body-small">{props.plan2Action}</span>
              </button>
            </div>
            <div className="pricing-column2 thq-card">
              <div className="pricing-price04">
                <div className="pricing-price05">
                  <p className="pricing-text22 thq-body-large">{props.plan3}</p>
                  <h3 className="pricing-text23 thq-heading-3">
                    {props.plan3Price}
                  </h3>
                  <p className="thq-body-large">{props.plan3Yearly}</p>
                </div>
                <div className="pricing-list2">
                  <div className="pricing-list-item07">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature1}
                    </span>
                  </div>
                  <div className="pricing-list-item08">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature2}
                    </span>
                  </div>
                  <div className="pricing-list-item09">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature3}
                    </span>
                  </div>
                  <div className="pricing-list-item10">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature4}
                    </span>
                  </div>
                  <div className="pricing-list-item11">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature5}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing-button06 thq-button-animated thq-button-filled">
                <span className="thq-body-small">{props.plan3Action}</span>
              </button>
            </div>
          </div>
        )}
        {!isMonthly && (
          <div className="pricing-container1">
            <div className="pricing-column3 thq-card">
              <div className="pricing-price06">
                <div className="pricing-price07">
                  <span className="pricing-text31 thq-body-large">
                    {props.plan11}
                  </span>
                  <h3 className="pricing-text32 thq-heading-3">
                    {props.plan1Price1}
                  </h3>
                  <span className="thq-body-large">{props.plan1Yearly1}</span>
                </div>
                <div className="pricing-list3">
                  <div className="pricing-list-item12">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature11}
                    </span>
                  </div>
                  <div className="pricing-list-item13">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature21}
                    </span>
                  </div>
                  <div className="pricing-list-item14">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature31}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing-button07 thq-button-animated thq-button-outline">
                <span className="thq-body-small">{props.plan1Action1}</span>
              </button>
            </div>
            <div className="pricing-column4 thq-card">
              <div className="pricing-price08">
                <div className="pricing-price09">
                  <span className="pricing-text38 thq-body-large">
                    {props.plan21}
                  </span>
                  <h3 className="pricing-text39 thq-heading-3">
                    {props.plan2Price1}
                  </h3>
                  <span className="thq-body-large">{props.plan2Yearly1}</span>
                </div>
                <div className="pricing-list4">
                  <div className="pricing-list-item15">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature11}
                    </span>
                  </div>
                  <div className="pricing-list-item16">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature21}
                    </span>
                  </div>
                  <div className="pricing-list-item17">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature31}
                    </span>
                  </div>
                  <div className="pricing-list-item18">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature41}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing-button08 thq-button-animated thq-button-filled">
                <span className="thq-body-small">{props.plan2Action1}</span>
              </button>
            </div>
            <div className="pricing-column5 thq-card">
              <div className="pricing-price10">
                <div className="pricing-price11">
                  <span className="pricing-text46 thq-body-large">
                    {props.plan31}
                  </span>
                  <h3 className="pricing-text47 thq-heading-3">
                    {props.plan3Price1}
                  </h3>
                  <span className="thq-body-large">{props.plan3Yearly1}</span>
                </div>
                <div className="pricing-list5">
                  <div className="pricing-list-item19">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature11}
                    </span>
                  </div>
                  <div className="pricing-list-item20">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature21}
                    </span>
                  </div>
                  <div className="pricing-list-item21">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature31}
                    </span>
                  </div>
                  <div className="pricing-list-item22">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature41}
                    </span>
                  </div>
                  <div className="pricing-list-item23">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature51}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing-button09 thq-button-animated thq-button-filled">
                <span className="thq-body-small">{props.plan3Action1}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

Pricing.defaultProps = {
  plan31: 'Enterprise plan',
  plan2Feature11: 'Feature text goes here',
  plan3Feature2: 'Customizable booking widgets',
  content1: 'Choose the perfect plan for you',
  plan3Feature51: 'Feature text goes here',
  plan3Yearly1: 'or $49 monthly',
  plan3Yearly: '$299/year',
  plan1Feature11: 'Feature text goes here',
  plan2Feature4: 'Feature text goes here',
  plan2Action1: 'Get started',
  plan1Price1: '$200/yr',
  plan2Feature21: 'Feature text goes here',
  plan2Feature2: 'SMS notifications for reservations',
  content2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
  heading1: 'Pricing plan',
  plan21: 'Business plan',
  plan2Feature31: 'Feature text goes here',
  plan1Feature1: 'Online booking for up to 50 guests',
  plan1Feature3: 'Basic customer support',
  plan3Feature4: 'Feature text goes here',
  plan1: 'Basic Plan',
  plan1Feature2: 'Email notifications for reservations',
  plan3Action1: 'Get started',
  plan3Feature3: '24/7 dedicated customer support',
  plan3Feature11: 'Feature text goes here',
  plan3Feature1: 'Unlimited online booking for guests',
  plan11: 'Basic plan',
  plan3Action: 'Sign Up Now',
  plan2Price1: '$299/yr',
  plan3Feature21: 'Feature text goes here',
  plan2Feature3: 'Priority customer support',
  plan2Feature1: 'Online booking for up to 150 guests',
  plan1Feature21: 'Feature text goes here',
  plan1Yearly1: 'or $20 monthly',
  plan2Yearly1: 'or $29 monthly',
  plan1Yearly: '$99/year',
  plan2Action: 'Sign Up Now',
  plan3Feature5: 'Feature text goes here',
  plan3Feature31: 'Feature text goes here',
  plan2Yearly: '$199/year',
  plan1Action1: 'Get started',
  plan2: 'Standard Plan',
  plan1Action: 'Sign Up Now',
  plan1Price: '$9.99/month',
  plan3: 'Premium Plan',
  plan1Feature31: 'Feature text goes here',
  plan3Price1: '$499/yr',
  plan3Price: '$29.99/month',
  plan2Feature41: 'Feature text goes here',
  plan2Price: '$19.99/month',
  plan3Feature41: 'Feature text goes here',
}

Pricing.propTypes = {
  plan31: PropTypes.string,
  plan2Feature11: PropTypes.string,
  plan3Feature2: PropTypes.string,
  content1: PropTypes.string,
  plan3Feature51: PropTypes.string,
  plan3Yearly1: PropTypes.string,
  plan3Yearly: PropTypes.string,
  plan1Feature11: PropTypes.string,
  plan2Feature4: PropTypes.string,
  plan2Action1: PropTypes.string,
  plan1Price1: PropTypes.string,
  plan2Feature21: PropTypes.string,
  plan2Feature2: PropTypes.string,
  content2: PropTypes.string,
  heading1: PropTypes.string,
  plan21: PropTypes.string,
  plan2Feature31: PropTypes.string,
  plan1Feature1: PropTypes.string,
  plan1Feature3: PropTypes.string,
  plan3Feature4: PropTypes.string,
  plan1: PropTypes.string,
  plan1Feature2: PropTypes.string,
  plan3Action1: PropTypes.string,
  plan3Feature3: PropTypes.string,
  plan3Feature11: PropTypes.string,
  plan3Feature1: PropTypes.string,
  plan11: PropTypes.string,
  plan3Action: PropTypes.string,
  plan2Price1: PropTypes.string,
  plan3Feature21: PropTypes.string,
  plan2Feature3: PropTypes.string,
  plan2Feature1: PropTypes.string,
  plan1Feature21: PropTypes.string,
  plan1Yearly1: PropTypes.string,
  plan2Yearly1: PropTypes.string,
  plan1Yearly: PropTypes.string,
  plan2Action: PropTypes.string,
  plan3Feature5: PropTypes.string,
  plan3Feature31: PropTypes.string,
  plan2Yearly: PropTypes.string,
  plan1Action1: PropTypes.string,
  plan2: PropTypes.string,
  plan1Action: PropTypes.string,
  plan1Price: PropTypes.string,
  plan3: PropTypes.string,
  plan1Feature31: PropTypes.string,
  plan3Price1: PropTypes.string,
  plan3Price: PropTypes.string,
  plan2Feature41: PropTypes.string,
  plan2Price: PropTypes.string,
  plan3Feature41: PropTypes.string,
}

export default Pricing
