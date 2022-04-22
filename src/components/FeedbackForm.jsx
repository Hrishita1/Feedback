import React from 'react'
import { useState } from 'react';
import Card from './shared/Card'
import Button from './shared/Button'

function FeedbackForm() {
    const [text,setText] = useState('')

    const handleTextChange = (e) => {
        setText(e.target.value)
    }
  return (
    <Card>
        <form>
            <h2>How would you rate your experience?</h2>
        </form>
        {/* rating select componemt */}
        <div className="input-group">
            <input 
            onChange={handleTextChange} 
            type="text" 
            placeholder="Write a review"
            value={text}
            />
            {/* <Button type='submit' version='secondary'>
                Send
            </Button> */}  
            {/* check button error */}
        </div>
    </Card>
  )
}

export default FeedbackForm