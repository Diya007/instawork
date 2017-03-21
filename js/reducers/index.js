
import {
	ADD_INFO
} from '../actions/index'

const initialState = [
	{	
		firstName:'diya',
		lastName:'zhao',
		email:'zdy',
		phone:'1111',
	}
]
	

export default function(state = initialState, action) {
  switch(action.type) {
    case 'ADD_INFO':
    	let newContact = action.info;
    	console.log(newContact)
      	return [...state, newContact];
  }
  console.log(state)
  return state
}