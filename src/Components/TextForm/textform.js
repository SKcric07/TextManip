import React from 'react'
import './TextForm.css'

function TextForm() {
  return (
    // This will contain the Main Body and they Text field
    <div className='text-form-container'>
      <div className="form-section">
        <h2 className='section-title'>Text Input</h2>
        <textarea 
          className='text-input' 
          placeholder='Enter or paste your text here...'>

        </textarea>

        <div className="text-stats">
          <span>10 words</span>
          <span>10 characters</span>
        </div>

        <div className="action-buttons">
          <button className="action-button">UPPERCASE</button>
          <button className="action-button">lowercase</button>
          <button className="action-button">Capitalize</button>
          <button className="action-button">Remove Space</button>
          <button className="action-button clear">Clear</button>
        </div>
      </div>
    </div>
  )
}

export default TextForm
