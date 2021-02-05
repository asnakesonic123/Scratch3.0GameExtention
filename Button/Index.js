import buttonStyles from './button.module.scss'
import classNames from 'classnames'
import * as icons from 'react-icons/fi'
import React from 'react'
import propTypes from 'prop-types'

const allowedIcons = Object.keys(icons).map(icon => icon.substr(2))

const Button = ({ children, className, icon, size, outline, secondary, loading, inline, ...otherProps }) => {
  const classes = classNames(
    buttonStyles.root,
    { [buttonStyles.inline]: inline },
    { [buttonStyles.loading]: !!loading },
    { [buttonStyles.iconOnly]: !children },
    { [buttonStyles.small]: size === 'small' },
    { [buttonStyles.large]: size === 'large' },
    { [buttonStyles.xlarge]: size === 'xlarge' },
    { [buttonStyles.secondary]: !!secondary },
    { [buttonStyles.outline]: !!outline }
  )
  const Icon = icon && icons[`Fi${icon}`]
  return (
    <button type="button" {...otherProps} className={[classes, className].join(' ')}>
      {loading && (
        <div className={buttonStyles.loadingOverlay} />
      )}
      {Icon && <Icon />}
      {children}
    </button>
  )
}

Button.propTypes = {
  /** Whether to show an icon - see https://goo.gl/3wa4RG (ignore Fi prefix) */
  icon: propTypes.oneOf(allowedIcons),
  /** Sets display to inline-block */
  inline: propTypes.bool,
  /** The size of the button */
  size: propTypes.oneOf(['small', 'default', 'large', 'xlarge']),
  /** Whether to use the secondary style */
  secondary: propTypes.bool,
  /** Whether to use the outline style */
  outline: propTypes.bool,
  /** Whether to mask the button with a loading indicator */
  loading: propTypes.bool
}

export default Button
