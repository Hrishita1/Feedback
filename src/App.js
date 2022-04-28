// import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList' 
import FeedbackData from './components/data/FeedbackData'
// import Card from './components/shared/Card'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'


function App(){
    const [feedback, setFeedback] = useState(FeedbackData)

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }
    const deleteFeedback=(id)=>{
        if(window.confirm('Are you sure')){
        setFeedback (feedback.filter((item) => item.id !== id))
        }
    }
  
    return (
    <>

        <Header bgColor='rgba(0,0,0,0.4)' textColour='#ff6a95'/>

        <div className='container'>
            <FeedbackForm  handleAdd={addFeedback}/>
            <FeedbackStats feedback={feedback} />
            <FeedbackList feedback={feedback}
            handleDelete={deleteFeedback}/>
            {/* <Card>hello</Card> */}
        </div>
    </>
        

        
    )
} 

export default App