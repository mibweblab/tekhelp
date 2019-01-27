import { FETCH_USER } from '../actions/types';

export default function(state = null, action) {
  //when browser loads up we will assume that we dont know whether or not ther user is logged in. so we avoid loading timeouts or errors in the browser

  switch (action.type) {
    case FETCH_USER:
      return action.payload || false; //this is making sure the authReducer will either return null, the user model or false
    default:
      return state;
  }
}
