
export const ADD_INFO = "ADD_INFO"; 

export const addInfo = (info) => {
	return {
		type: ADD_INFO,
		info
	}
}


export const SELECTED_INFO = "SELECTED_INFO";
export const selectedInfo = (info, id) => {
	return {
		type: SELECTED_INFO,
		info: info,
		id: id
	}
}