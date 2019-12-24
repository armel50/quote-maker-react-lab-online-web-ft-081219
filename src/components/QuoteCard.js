import React from 'react';

// import {
//   removeQuote,
//   upvoteQuote,
//   downvoteQuote
// } from "../actions/quotes";


const QuoteCard = (props) =>
  <div>
    <div id={props.quote.id} className="card card-inverse card-success card-primary mb-3 text-center">
      <div className="card-block">
        <blockquote className="card-blockquote">
          <p>{props.quote.content}</p>
          {<footer>- author <cite title="Source Title">{props.quote.author}</cite></footer> }
        </blockquote>
      </div>
      <div className="float-right">
        <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
          <button  onClick={()=>{props.dispatch(props.upvoteQuote(props.quote.id))}} 
            type="button"
            className="btn btn-primary"
          >Upvote</button>
          <button  onClick={()=>{props.dispatch(props.downvoteQuote(props.quote.id))}} 
            type="button"
            className="btn btn-secondary"
          >Downvote</button>
          <button onClick={()=>{props.dispatch(props.removeQuote(props.quote.id))}} 
            type="button"
            className="btn btn-danger"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
         <div>Votes: {props.quote.votes}</div> 
      </div>
    </div>
  </div>;

 
export default QuoteCard;
