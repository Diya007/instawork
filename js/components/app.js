import React, { Component } from 'react';	
import { connect } from 'react-redux';
import { addInfo, selectedInfo } from '../actions/index';
import FaPlusCircle from 'react-icons/lib/fa/plus-circle';
import FaTimesCircle from 'react-icons/lib/fa/times-circle';
import MdEdit from 'react-icons/lib/md/edit';
//import List from './list';

// import styled from 'styled-components';

// const AppWrapper = styled.div‘
// 	display : flex;

// ’

//-----------App Component---------------
class App extends React.Component {
	render() {
		return (
			<div className="app">
				<h1> Address book</h1>
				<hr />
				<List people={this.props.people} selectedInfo={this.props.selectedInfo} />
				<hr />
				<Add addInfo={this.props.addInfo}/>
				
			</div>
		)
	}
}

//-----------List Component---------------
class List extends React.Component {
	render() {
		return (
			<div className="people-list">
				<FaPlusCircle className="pointer" />
				<header>
					<h2> Team memebers </h2>
					<p> You have 3 team memebers </p>
				</header>

				<ul className="list" >
					{this.props.people.map((person) => {
						return <Person person={person} key={person.id} selectedInfo={this.props.selectedInfo} />
						}
					)}
				</ul>

			</div>
		)
	}
}

class Person extends React.Component {
	constructor() {
    	super();
    	this.state = {
    		show: false
    	};
      
    }

	_callEdit() {
		this.setState({show: true});

		// let id = this.props.person.id;
		// let firstName = this.props.person.firstName;
		// let lastName = this.props.person.lastName;
		// let email = this.props.person.email;
		// let phone = this.props.person.phone;
		// let regular = this.props.person.regular;

		//this.props.selectedInfo(id, firstName, lastName, email, phone, regular)
	}

	render() {	
		return (
			<div>
				<li className="pointer" onClick={this._callEdit.bind(this)}>
					<MdEdit />
					{this.props.person.firstName} &nbsp;
	          		{this.props.person.lastName} <br />
	          		{this.props.person.email} <br />
	          		{this.props.person.phone} <br />
	          		{this.props.person.regular === 'on' ? "Regular member" : "Admin"}
				</li>

				{this.state.show ? <Edit selectedInfo={this.props.selectedInfo} id={this.props.person.id} firstName={this.props.person.firstName} regular={this.props.person.regular} /> : null }

			</div>
		)
	}
}

//-----------Add Component---------------
class Add extends React.Component {
	constructor() {
    	super();
    	this.state = {
    		firstName:"",
			lastName:"",
			email:"",
			phone:"",
			regular: "",
			admin: ""
    	}
      
    }
	_addNew (e) {
		e.preventDefault();
		this.props.addInfo(this.state);
		this.setState({
			firstName:"",
			lastName:"",
			email:"",
			phone:"",
			regular: "",
			admin: ""

		})

	}

	_handleChange (e) {
		let state = this.state;
		let value = e.target.value;
		let name = e.target.name;
		state[name] = value;
		this.setState(state);
		console.log(this.state)

	}

	render() {
		return (		
			<div className="add">
				<FaTimesCircle className="pointer"  />
				<header>
					<h2> Add a team memeber </h2>
					<p>Set email. location and role</p>
				</header>

				<div className="add-form">
					<h3>Info</h3>
					<form onSubmit={this._addNew.bind(this)}>
						<div className="form-feild">
							<label>First name</label>
							<input type="text" name="firstName"  onChange={this._handleChange.bind(this)} value={this.props.firstName} />

						</div>
						<div className="form-feild">
							<label>Last name</label>
							<input type="text" name="lastName" onChange={this._handleChange.bind(this)} value={this.props.lastName} />
						</div>
						<div className="form-feild">
							<label>Email</label>
							<input type="text" name="email" onChange={this._handleChange.bind(this)} value={this.props.email} />
						</div>
						<div className="phone-number">
							<label>Phone</label>
							<input type="text" name="phone" onChange={this._handleChange.bind(this)} value={this.props.phone} />
						</div>
						<div className="role">
							<h3> Role </h3>
							<p>Regular - Can't delete members<input type="radio" name="regular" onChange={this._handleChange.bind(this)} value={this.state.regular} /></p>
							<p>Admin - Can delete members<input type="radio" name="admin" onChange={this._handleChange.bind(this)} value={this.state.admin} /></p>
						</div>
						<input type="submit" value="Save" />
					</form>

				</div>

			</div>

		)
	}
}

//-----------Edit Component---------------

class Edit extends React.Component {
	constructor() {
    	super();
    	this.state = {
    		show: true,
    		editingContact: {
    			firstName:"",
				lastName:"",
				email:"",
				phone:"",
				regular: "",
				admin: ""

    		}
    	};
      
    }
	_hide(e) {
		e.preventDefault();
		//this.setState({show: false});
		let id=this.props.id;
		console.log(id);
		this.props.selectedInfo(this.state.editingContact, id )
	}

	_handleChange (e) {
		let editingContact = this.state.editingContact;
		let value = e.target.value;
		let name = e.target.name;
		editingContact[name] = value;
		this.setState(editingContact);
		console.log(this.state.editingContact)

	}

	render() {
		return (
			<div className="edit" >
				<FaTimesCircle className="pointer"  onClick={this._hide.bind(this)}/>
				<header>
					<h2> Edit team memeber </h2>
					<p> Edit contact info, location and role.</p>
				</header>

				<div className="eidt-form">
					<h3>Info</h3>
					<form onSubmit={this._hide.bind(this)} >
						<div className="form-feild">
							<label>First name</label>
							<input type="text" name="firstName"  onChange={this._handleChange.bind(this)} />
						</div>
						<div className="form-feild">
							<label>Last name</label>
							<input type="text" name="lastName" value={this.props.lastname} onChange={this._handleChange.bind(this)} />
						</div>
						<div className="form-feild">
							<label>Email</label>
							<input type="text" name="email" value={this.props.email} onChange={this._handleChange.bind(this)} />
						</div>
						<div className="phone-number">
							<label>Phone</label>
							<input type="text" name="phone" value={this.props.phone} onChange={this._handleChange.bind(this)} />
						</div>
						<div className="role">
							<h3> Role </h3>
							<p>Regular - Can't delete members<input type="radio" name="regular" value={this.props.regular} onChange={this._handleChange.bind(this)} /></p>
							<p>Admin - Can delete members<input type="radio" name="admin" value={this.props.admin}  onChange={this._handleChange.bind(this)} /></p>
						</div>

						<input type="submit" value="Save" />
						<input type="submit" value="Delete" />

					</form>
				</div>

			</div>

		)
	}
}


function mapStateToProps(state) {
	return {
		people:state
	};
}

export default connect (mapStateToProps,{addInfo, selectedInfo})(App);