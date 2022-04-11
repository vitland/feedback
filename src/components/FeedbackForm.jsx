import React from 'react';
import { useState, useContext, useEffect } from 'react';
import Card from './shared/Card';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';
import FeedbackContext from '../contex/FeedbackContext';



function FeedbackForm() {
  const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext)
  const [text, setText] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(10);

  useEffect(()=>{
    if (feedbackEdit.edit === true) {
      setBtnDisabled(false)
      setText(feedbackEdit.item.text)
      setRating(feedbackEdit.item.rating)
      
    }
  },[feedbackEdit])

  const handleTextChange = (event) => {
    if (text === '') {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== '' && text.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage('Review shoud be at least 10 characters long');
    } else{
      setBtnDisabled(false);
      setMessage(null);
    }
    setText(event.target.value);
  };


    const handleSubmit = (event) => {
      event.preventDefault();
      if (text.trim().length > 10) {
        const newFeedback = {
          text: text,
          rating: rating,
        };
        if (feedbackEdit.edit === true) {
          updateFeedback(feedbackEdit.item.id, newFeedback)
        setText('')
        }else{
          addFeedback(newFeedback); 
        setText('')
        }
        
      }
    };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How woud you rate?</h2>
        <RatingSelect select={(rating)=> setRating(rating)}/>
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a rewiev"
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
