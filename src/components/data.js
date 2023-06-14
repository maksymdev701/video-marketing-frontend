import React from 'react'

import PropTypes from 'prop-types'

import './data.css'

const Data = (props) => {
  return (
    <div className={`data-data ${props.rootClassName} `}>
      <span className="data-text">{props.text}</span>
      <span className="data-text1 Stat">{props.text1}</span>
    </div>
  )
}

Data.defaultProps = {
  rootClassName: '',
  text: 'Total views',
  text1: '1,000,000',
}

Data.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
}

export default Data
