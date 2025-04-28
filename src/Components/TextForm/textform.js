import React, {useState} from 'react'
import './TextForm.css'

function TextForm() {
  
  const [inputText, setInputText] = useState("");

  const handleTextChange = (event) => {
    setInputText(event.target.value);
  }

  // Definition of convertToUpperCase function
  const convertToUpperCase = () => {
    setInputText(inputText.toUpperCase());
  };

  // Definition of convertToLowerCase function
  const convertToLowerCase = () => {
    setInputText(inputText.toLowerCase());
  };

  // Definition to convert every word letter in Captial letter
  const convertToCaptial = () => {
    const words = inputText.split(" ");
    const captializedText = words.map(word => {return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()}).join(" ");
    setInputText(captializedText);
  }

  const clearTextArea = () => {
    setInputText("");
  }


  const handleCopyPreview = () => {
    navigator.clipboard.writeText(inputText);
    alert("Copied to clipborad!");
  }

  return (
    // This will contain the Main Body and they Text field
    <div className='text-form-container'>
      <div className="form-section">
        <h2 className='section-title'>Text Input</h2>
        <textarea 
          className='text-input' 
          placeholder='Enter or paste your text here...'
          value={inputText}
          onChange={handleTextChange}>
          
        </textarea>

        <div className="text-stats">
          <span>{inputText.split(/\s+/).filter(word => word !== "").length} words</span>
          <span>{inputText.length} characters</span>
        </div>

        <div className="action-buttons">
          {/* Button to convert UpperCase */}
          <button className="action-button" onClick={convertToUpperCase}>UPPERCASE</button>

          {/* Button to convert lowerCase */}
          <button className="action-button" onClick={convertToLowerCase}>lowercase</button>

          <button className="action-button" onClick={convertToCaptial}>Capitalize</button>
          <button className="action-button">Remove Space</button>

          {/* Button to clear the textarea field */}
          <button className="action-button clear" onClick={clearTextArea}>Clear</button>
        </div>

        <div className="preview-section">
          <div className="preview-header">
            <h2 className='preview-title'>Preview</h2>
            <button className="preview-copy-button" onClick={handleCopyPreview} disabled={!inputText}>Copy</button>
          </div>

          <div className="preview-display">
            {inputText || "Your result will appear here..."}
          </div>
        </div>

      </div>
    </div>
  );
}

export default TextForm
