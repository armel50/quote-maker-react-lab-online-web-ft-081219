export default (state = [], action) => {
  console.log(action)
  const copy = [...state]
  switch(action.type){
    case "ADD_QUOTE": return state = [...state,action.quote];
    case "REMOVE_QUOTE": copy.splice(find_index(copy,action),1)
      return copy;
    case "GET_STATE": return state;
    case "UPVOTE_QUOTE":
    
      state.find(e => {
      if(e.id === action.quoteId ){
        const index = state.indexOf(e)
        console.log(e.votes)
     
        copy[index] = {...e, votes: e.votes + 1}
        return e
      }
    })
    return copy;
      
    case "DOWNVOTE_QUOTE": state.find(e => {
      if(e.id === action.quoteId && e.votes > 0){
        const index = state.indexOf(e)

        e = {...e, votes:e.votes - 1}
        copy[index] = e
        return e
      }
    })
    return copy;
    default: return state
  }
}
const find_index = (state,action) => {
 return state.map(e => {return e.id}).indexOf(action.quoteId)
}