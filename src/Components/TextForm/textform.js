import React from 'react'
import './TextForm.css'
function TextForm() {
  return (
    // This will contain the Main Body and they Text field
    <div>
      <div className="form-section">
        <h2 className='section-title'>Text Input</h2>
        <textarea 
          className='text-input' 
          placeholder='Enter or paste your text here...'>

        </textarea>

        <div className="action-buttons">
          <button className="action-button">UPPERCASE</button>
          <button className="action-button">lowercase</button>
          <button className="action-button">Capitalize</button>
          <button className="action-button clear">Clear</button>
        </div>
      </div>
    </div>
  )
}

export default TextForm
