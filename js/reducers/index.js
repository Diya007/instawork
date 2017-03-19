
// import {
// 	CREATE
// } from './actions/index'

const initialState = [
	{	
		firstName:'diya',
		lastName:'zhao',
		email:'zdy',
		phone:'1111',
		id: 1
	}
]
	

export default function(state = initialState, action) {
  switch(action.type) {
    case 'ADD_INFO':
    	let newContact = Object.assign({}, {firstName:action.firstName, lastName:action.lastName, email:action.email, phone:action.phone})
      	return state.push(newContact);
  }

  return state
}