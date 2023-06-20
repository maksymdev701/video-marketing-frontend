import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './language.css'

const Language = (props) => {
  return (
    <div className={`language-container ${props.rootClassName} `}>
      <div data-thq="thq-dropdown" className="language-thq-dropdown list-item">
        <div
          data-thq="thq-dropdown-toggle"
          className="language-dropdown-toggle"
        >
          <span className="language-text">{props.English}</span>
          <div
            data-thq="thq-dropdown-arrow"
            className="language-dropdown-arrow"
          >
            <svg viewBox="0 0 1024 1024" className="language-icon">
              <path d="M426 726v-428l214 214z" className=""></path>
            </svg>
          </div>
        </div>
        <ul data-thq="thq-dropdown-list" className="language-dropdown-list">
          <li data-thq="thq-dropdown" className="language-dropdown list-item">
            <Link to="/download" className="">
              <div
                data-thq="thq-dropdown-toggle"
                className="language-dropdown-toggle1"
              >
                <span className="language-text1">English</span>
              </div>
            </Link>
          </li>
          <li data-thq="thq-dropdown" className="language-dropdown1 list-item">
            <div
              data-thq="thq-dropdown-toggle"
              className="language-dropdown-toggle2"
            >
              <span className="language-text2">{props.Chinese}</span>
            </div>
          </li>
          <li data-thq="thq-dropdown" className="language-dropdown2 list-item">
            <div
              data-thq="thq-dropdown-toggle"
              className="language-dropdown-toggle3"
            >
              <span className="language-text3">{props.French}</span>
            </div>
          </li>
          <li data-thq="thq-dropdown" className="language-dropdown3 list-item">
            <div
              data-thq="thq-dropdown-toggle"
              className="language-dropdown-toggle4"
            >
              <span className="language-text4">{props.Spanish}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

Language.defaultProps = {
  French: 'Français',
  Spanish: 'Español',
  Chinese: '中文',
  rootClassName: '',
  English: 'ENG / 中文',
}

Language.propTypes = {
  French: PropTypes.string,
  Spanish: PropTypes.string,
  Chinese: PropTypes.string,
  rootClassName: PropTypes.string,
  English: PropTypes.string,
}

export default Language
