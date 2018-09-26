import React from 'react'
import { string, bool, object } from 'prop-types'
import { Icon as AntDIcon } from 'antd'

export const Icon = props => <AntDIcon {...props} />

Icon.propTypes = {
  spin: bool,
  style: object,
  type: string
}

Icon.defaultProps = {
  spin: false
}

export default Icon
