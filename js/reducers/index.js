
import {
	ADD_INFO,
	SELECTED_INFO
} from '../actions/index'

const initialState = [
	{	
		firstName:'diya',
		lastName:'zhao',
		email:'zdy',
		phone:'1111',
		regular: '',
		admi: 'on',
		id: 1
	}
]
	

export default function(state = initialState, action) {
	switch(action.type) {
    	case 'ADD_INFO':
   
    		let id = {id : state.length +1}
    		let newContact = Object.assign({}, action.info, id)
    		console.log(newContact)
      		return [...state, newContact];

      	case 'SELECTED_INFO' :
      		console.log(action.id);
      		return state
  	}
 
  	return state
}