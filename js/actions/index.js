
export const ADD_INFO = "ADD_INFO"; 

export const addInfo = (info) => {
	return {
		type: ADD_INFO,
		info
	}
}


export const SELECTED_INFO = "SELECTED_INFO";
export const seclectedInfo = (info) => {
	return {
		type: SELECTED_INFO,
		info
	}
}