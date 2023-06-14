import React from 'react'

import PropTypes from 'prop-types'

import './footer.css'

const Footer = (props) => {
  return (
    <footer className={`footer-footer ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="footer-image"
      />
      <span className="footer-text">{props.text}</span>
    </footer>
  )
}

Footer.defaultProps = {
  rootClassName: '',
  image_alt: 'image',
  text: '© 2023 Eurasia Media ',
  image_src: '/eurasia%20media%20logo%20wh.svg',
}

Footer.propTypes = {
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
  text: PropTypes.string,
  image_src: PropTypes.string,
}

export default Footer
