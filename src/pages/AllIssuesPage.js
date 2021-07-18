import React, { useState, useEffect } from 'react'
import IssuesList from '../components/IssuesList'
import { Link } from 'react-router-dom'

const AllIssuesPage = () => {
  const [issues, setIssues] = useState([])

  useEffect(() => {
    const getIssues = async () => {
      const res = await fetch('/issues')
      const data = await res.json()
      setIssues(data)
    }
    getIssues()
  }, [])

  return (
    <>
      <h1>Issue List</h1>
      <IssuesList issues={issues} />
      <Link to='/addIssue'>Add Issue</Link>
    </>
  )
}

export default AllIssuesPage
