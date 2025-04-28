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

  //Definition to remove extra space from the sentence
  const removeExtraSpace = () => {
    const nospace = inputText.trim().split(/\s+/).join(' ');
    setInputText(nospace);
  }
  
  //Definition to remove space between words
  const removeSpace = () => {
    const noWordSpace = inputText.replace(/\s+/g, "");
    setInputText(noWordSpace);
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
          onChange={handleTextChange}
          onKeyDown={(e) => {
            if(e.key === 'Tab'){
              e.preventDefault();
              const start = e.target.selectionStart;
              const end = e.target.selectionEnd;
              setInputText(inputText.substring(0, start) + "\t" + inputText.substring(end));
              setTimeout(() => {
                e.target.selectionStart = e.target.selectionEnd = start + 1;
              }, 0);
            }
          }}
          
          >
          
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

          {/* Button to covert frist letter of every word into Captial letter */}
          <button className="action-button" onClick={convertToCaptial}>Capitalize</button>

          {/* Button to remove extra space */}
          <button className="action-button" onClick={removeExtraSpace}>Remove Extra Space</button>

          {/* Button to remove space from the words and sentence*/}
          <button className="action-button" onClick={removeSpace}>Remove Space</button>

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
