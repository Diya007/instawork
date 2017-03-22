import React, { Component } from 'react';	
import { connect } from 'react-redux';
import { addInfo } from '../actions/index';
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
				<List people={this.props.people} />
				<hr />
				<Add addInfo={this.props.addInfo}/>
				<hr />
				<Edit />	
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
				<ul className="list">
					{this.props.people.map((person) => {
						return <Person person={person} key={person.firstName} />
						//console.log(person.firstName)
						}
					)}
				</ul>
			</div>
		)
	}
}

class Person extends React.Component {
	_callEdit() {
	
		console.log(this.props.person)

	}
	render() {
		
		return (
			<li onClick={this._callEdit.bind(this)} className="pointer" >
				<MdEdit />
				{this.props.person.firstName} 
          		{this.props.person.lastName} <br />
          		{this.props.person.email} <br />
          		{this.props.person.phone} <br />
          		{this.props.person.regular === 'on' ? "Regular member" : "Admin"}
			</li>
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
							<input type="text" name="firstName"  onChange={this._handleChange.bind(this)} value={this.props.firstname} />

						</div>
						<div className="form-feild">
							<label>Last name</label>
							<input type="text" name="lastName" onChange={this._handleChange.bind(this)} value={this.props.lastname} />
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
							<p>Regular - Can't delete members<input type="radio" name="regular" onChange={this._handleChange.bind(this)} /></p>
							<p>Admin - Can delete members<input type="radio" name="admin" onChange={this._handleChange.bind(this)} /></p>
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
	_edit (data) {
		console.log('hello')
	}
	render() {
		return (
			<div className="edit">
				<FaTimesCircle className="pointer"  />
				<header>
					<h2> Edit team memeber </h2>
					<p> Edit contact info, location and role.</p>
				</header>

				<div className="eidt-form">
					<h3>Info</h3>
					<form onSubmit={this._edit}>
						<div className="form-feild">
							<label>First name</label>
							<input type="text" name="firstName"  onChange={this._handleChange} />
						</div>
						<div className="form-feild">
							<label>Last name</label>
							<input type="text" name="lastName" value={this.props.lastname} />
						</div>
						<div className="form-feild">
							<label>Email</label>
							<input type="text" name="email" value={this.props.email} />
						</div>
						<div className="phone-number">
							<label>Phone</label>
							<input type="text" name="phone" value={this.props.phone}  />
						</div>
						<div className="role">
							<h3> Role </h3>
							<p>Regular - Can't delete members<input type="radio" name="regular" /></p>
							<p>Admin - Can delete members<input type="radio" name="admin" /></p>
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

export default connect (mapStateToProps,{addInfo})(App);