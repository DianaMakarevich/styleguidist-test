import React from 'react'
import { bool, func, string } from 'prop-types'
import { Button as AntDButton } from 'antd'

export const Button = props => (
  <AntDButton type="primary" {...props}>
    {props.text}
  </AntDButton>
)

Button.propTypes = {
  text: string,
  htmlType: string,
  icon: string,
  loading: bool,
  shape: string,
  size: string,
  type: string,
  onClick: func
}

Button.defaultProps = {
  htmlType: 'button',
  loading: false,
  size: 'default',
  type: 'default'
}

export default Button
