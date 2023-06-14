import React from 'react'

import PropTypes from 'prop-types'

import './channels.css'

const Channels = (props) => {
  return (
    <div className="channels-channels">
      <div className="channels-logo">
        <svg viewBox="0 0 1024 1024" className="channels-icon">
          <path d="M1024 226.4c-37.6 16.8-78.2 28-120.6 33 43.4-26 76.6-67.2 92.4-116.2-40.6 24-85.6 41.6-133.4 51-38.4-40.8-93-66.2-153.4-66.2-116 0-210 94-210 210 0 16.4 1.8 32.4 5.4 47.8-174.6-8.8-329.4-92.4-433-219.6-18 31-28.4 67.2-28.4 105.6 0 72.8 37 137.2 93.4 174.8-34.4-1-66.8-10.6-95.2-26.2 0 0.8 0 1.8 0 2.6 0 101.8 72.4 186.8 168.6 206-17.6 4.8-36.2 7.4-55.4 7.4-13.6 0-26.6-1.4-39.6-3.8 26.8 83.4 104.4 144.2 196.2 146-72 56.4-162.4 90-261 90-17 0-33.6-1-50.2-3 93.2 59.8 203.6 94.4 322.2 94.4 386.4 0 597.8-320.2 597.8-597.8 0-9.2-0.2-18.2-0.6-27.2 41-29.4 76.6-66.4 104.8-108.6z"></path>
        </svg>
        <span className="channels-text">{props.text}</span>
      </div>
      <div className="channels-container">
        <input
          type="text"
          placeholder={props.textinput_placeholder}
          className="channels-textinput input"
        />
        <input
          type="text"
          placeholder={props.textinput_placeholder1}
          className="channels-textinput1 input"
        />
        <div className="channels-container1">
          <button type="button" className="channels-button button">
            {props.button}
          </button>
          <button type="button" className="channels-button1 button">
            {props.button1}
          </button>
        </div>
      </div>
    </div>
  )
}

Channels.defaultProps = {
  button1: 'SAVE',
  textinput_placeholder: 'placeholder',
  text: 'TWITTER',
  textinput_placeholder1: 'placeholder',
  button: 'Add Channel',
}

Channels.propTypes = {
  button1: PropTypes.string,
  textinput_placeholder: PropTypes.string,
  text: PropTypes.string,
  textinput_placeholder1: PropTypes.string,
  button: PropTypes.string,
}

export default Channels
