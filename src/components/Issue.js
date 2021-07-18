import React from 'react'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'

const Issue = ({ issue }) => {
  const history = useHistory()

  const handleClick = (e) => {
    e.preventDefault()

    if (window.confirm('Are you sure want to view the details ?')) {
      history.push(`/issues/${issue.description}`)
    }
  }

  return (
    <tr>
      <td>
        <a href='/#!' onClick={handleClick}>
          {issue.description}
        </a>
      </td>
      <td>{issue.severity}</td>
      <td>{issue.status}</td>
    </tr>
  )
}

Issue.propTypes = {
  issue: PropTypes.object.isRequired,
}

export default Issue
