import axios from 'axios';
import { GET_CONTACTS, GET_SINGLE_CONTACT, ADD_CONTACT, EDIT_CONTACT, DELETE_CONTACT, ERROR } from './types';

export const getContacts = () => async dispatch => {
  try{
    const response = await axios.get("http://jsonplaceholder.typicode.com/users");
    if(response.data){
      dispatch({
        type: GET_CONTACTS,
        payload: response.data
      });
    }
  }
  catch(e){
    if(e){
      dispatch({
        type: ERROR,
        payload: "An Error Occured"
      });
    }
  }
}

export const addContact = payload => async dispatch => {
  try{
    const response = await axios.post("http://jsonplaceholder.typicode.com/users/", payload);
    if(response.data){
      dispatch({
        type: ADD_CONTACT,
        payload: response.data
      });
    }
  }
  catch(e){
    if(e){
      dispatch({
        type: ERROR,
        payload: "An Error Occured"
      });
    }
  }
}

export const deleteContact = id => async dispatch => {
  try{
    const response = await axios.delete(`http://jsonplaceholder.typicode.com/users/${id}`);
    if(response.data){
      dispatch({
        type: DELETE_CONTACT,
        payload: id
      });
    }
  }
  catch(e){
    if(e){
      dispatch({
        type: DELETE_CONTACT,
        payload: id
      });
      // dispatch({
      //   type: ERROR,
      //   payload: "An Error Occured"
      // });
    }
  }  
}

export const getSingleContact = id => async dispatch => {
  try{
    const response = await axios.get(`http://jsonplaceholder.typicode.com/users/${id}`);
    if(response.data){
      dispatch({
        type: GET_SINGLE_CONTACT,
        payload: response.data
      });
    }
  }
  catch(e){
    if(e){
      dispatch({
        type: ERROR,
        payload: "An Error Occured"
      });
    }
  }
}

export const editContact = action => async dispatch => {
  try{
    const response = await axios.put(`http://jsonplaceholder.typicode.com/users/${action.payload.id}`, action.payload);
    if(response.data){
      dispatch({
        type: EDIT_CONTACT,
        payload: response.data
      });
    }
  }
  catch(e){
    if(e){
      dispatch({
        type: ERROR,
        payload: "An Error Occured"
      });
    }
  }
}
