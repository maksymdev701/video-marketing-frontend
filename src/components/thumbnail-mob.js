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
      <div className="thumbnail-mob-container1">
        <div className="thumbnail-mob-id-author">
          <span className="thumbnail-mob-text">{props.text2}</span>
          <span className="thumbnail-mob-text1">{props.text11}</span>
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
  text: 'Video ID',
  text2: 'Brand',
  text11: 'Reward $',
  video_src: '',
  text1: 'Author',
}

ThumbnailMOB.propTypes = {
  rootClassName: PropTypes.string,
  button: PropTypes.string,
  text: PropTypes.string,
  text2: PropTypes.string,
  text11: PropTypes.string,
  video_src: PropTypes.string,
  text1: PropTypes.string,
}

export default ThumbnailMOB
