import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // return state.concat([action.payload.data]); The same as line 7
      return [ action.payload.data, ...state ]; // [city, city] NOT [city, [city]]
  }
  return state;
}
