import React from 'react'
import { useParams, Link } from 'react-router-dom'

const IssueDetail = () => {
  const { description } = useParams()

  return (
    <>
      <h2>Issue Details</h2>
      <p>
        <strong>Issue Description:</strong> {description}
      </p>
      <Link to='/issues'>Back</Link>
    </>
  )
}

export default IssueDetail
