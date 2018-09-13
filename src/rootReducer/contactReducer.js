import { GET_CONTACTS, GET_SINGLE_CONTACT, ADD_CONTACT, EDIT_CONTACT, DELETE_CONTACT, ERROR } from '../actions/types';

const initialState = {
  contacts: [],
  singleContact: {},
  error: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CONTACTS: 
      return {
        ...state,
        contacts: action.payload
      }
    case GET_SINGLE_CONTACT: 
      return {
        ...state,
        singleContact: action.payload
      }
    case ADD_CONTACT: 
      return {
        ...state,
        contacts: [ action.payload, ...state.contacts ]
      }
    case EDIT_CONTACT: 
      return {
        ...state,
        contacts: state.contacts.map(contact => contact.id === action.payload.id ? contact = action.payload : contact)
      }
    case DELETE_CONTACT: 
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== action.payload)
      }
    case ERROR:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
}
