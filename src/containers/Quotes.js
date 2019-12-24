import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';

import {
  removeQuote,
  upvoteQuote,
  downvoteQuote
} from "../actions/quotes";




class Quotes extends Component {
  


  display_quote = () => {
    console.log(this.props)
    const quotes = this.props.quotes
    
   
    return quotes.map(e => <QuoteCard key={e.id} removeQuote={removeQuote} upvoteQuote= {upvoteQuote} downvoteQuote={downvoteQuote} dispatch={ this.props.dispatch} quote={ e} />)
  }

  render() {
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
            {this.display_quote()}         
           </div>
          </div>
        </div>
      </div>
    );
  }
}

//add arguments to connect as needed
export default connect(state=>{return {quotes: state.quotes}})(Quotes);
