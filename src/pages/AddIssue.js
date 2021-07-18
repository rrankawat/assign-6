import React from 'react'

const AddIssue = () => {
  return (
    <>
      <h2>Add Issue</h2>

      <form>
        <div className='mb-2'>
          <label>Description: </label>
          <input type='text' style={{ width: '300px' }} />
        </div>

        <div className='mb-2'>
          <label>Severity: </label>
          <select name='cars' id='cars'>
            <option value='Minor'>Minor</option>
            <option value='Major'>Major</option>
            <option value='Critical'>Critical</option>
          </select>
        </div>

        <div className='mb-2'>
          <label>Status: </label>
          <input type='radio' /> Open
          <input type='radio' /> In Progress
          <input type='radio' /> Closed
        </div>

        <input type='submit' value='Submit' />
      </form>
    </>
  )
}

export default AddIssue
