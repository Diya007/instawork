
import {
	ADD_INFO,
	SELECTED_INFO,
	DELETE_INFO
} from '../actions/index'

const initialState = [
	{	
		firstName:'Adrien',
		lastName:'Olczak',
		email:'adrien@instawork.com',
		phone:'415-310-1619',
		regular: '',
		admi: 'on',
		id: 1
	},
	{	
		firstName:'Charlene',
		lastName:'Pham',
		email:'charlene@instawork.com',
		phone:'415-310-1619',
		regular: '',
		admi: 'on',
		id: 2
	},
	{	
		firstName:'Beanson',
		lastName:'Mach',
		email:'benson@instawork.com',
		phone:'415-310-1619',
		regular: '',
		admi: 'on',
		id: 3
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
      		return state.map(item => 
      			item.id === action.id ?
      				{...item,
      					...action.info
      				}
      				: item

      		)

      	case 'DELETE_INFO' :
      		return state.filter(item => item.id !== action.id);
  	}
 
  	return state
}