
export const ADD_CONTACT = "ADD_CONTACT"; 
export function addInfo(firstName, lastName, email, phone) {
	return {
		type: ADD_CONTACT,
		firstName: firstName,
		lastName: lastName,
		email: email,
		phone: phone
	}
}


