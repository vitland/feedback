import React from 'react';
import { useContext } from 'react';
import PropTypes from 'prop-types';
import { FaTimes, FaEdit } from 'react-icons/fa';
import Card from './shared/Card';
import FeedbackContext from '../contex/FeedbackContext';


function FeedbackItem({item}) {
  const {deleteFeedback, editFeedback} = useContext(FeedbackContext)
  
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={()=> deleteFeedback(item.id)} className="close">
        <FaTimes color='dark-blue'/>
      </button>
      <button onClick={()=> editFeedback(item)} className="edit">
        <FaEdit color='dark-blue'/> 
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}


 
FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
