import React, {PropTypes} from 'react'

ValidEmail.propTypes = {

}
ValidEmail.defaultProps = {

}

function ValidEmail({regex, ...props}) {
  return (
    <input data-valid="email" {...props} />
  )
}

module.exports = ValidEmail
