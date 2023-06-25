import React from 'react'

import PropTypes from 'prop-types'

import './thumbnail-mob.css'

const ThumbnailMOB = (props) => {
  return (
    <div className={`thumbnail-mob-container ${props.rootClassName} `}>
      <video
        src={props.video_src}
        poster="https://play.teleporthq.io/static/svg/videoposter.svg"
        className="thumbnail-mob-video"
      ></video>
      <div className="thumbnail-mob-id-author">
        <span className="thumbnail-mob-text">{props.Brand}</span>
        <div className="thumbnail-mob-container1">
          <span className="thumbnail-mob-text1">{props.Commission}</span>
          <span className="thumbnail-mob-text2">{props.Reward}</span>
        </div>
      </div>
      <button type="button" className="thumbnail-mob-button button">
        {props.button}
      </button>
    </div>
  )
}

ThumbnailMOB.defaultProps = {
  rootClassName: '',
  button: 'DOWNLOAD',
  Commission: '50%',
  text: 'Video ID',
  Brand: 'Eurasia Media',
  Reward: '€0',
  video_src: '',
}

ThumbnailMOB.propTypes = {
  rootClassName: PropTypes.string,
  button: PropTypes.string,
  Commission: PropTypes.string,
  text: PropTypes.string,
  Brand: PropTypes.string,
  Reward: PropTypes.string,
  video_src: PropTypes.string,
}

export default ThumbnailMOB
