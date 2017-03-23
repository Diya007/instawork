import React, { Component } from 'react';	
import { connect } from 'react-redux';
import { addInfo, selectedInfo,deleteInfo } from '../actions/index';
import FaPlusCircle from 'react-icons/lib/fa/plus-circle';
import FaTimesCircle from 'react-icons/lib/fa/times-circle';
import MdAccountCircle from 'react-icons/lib/md/account-circle';
import MdEdit from 'react-icons/lib/md/edit';

{/* -----------App Component---------------*/}
class App extends React.Component {
	render() {
		return (
			<div className="app">
				<h1> Address book</h1>
				<hr />
				<List people={this.props.people} selectedInfo={this.props.selectedInfo} deleteInfo={this.props.deleteInfo} />
				<hr />
				<Add addInfo={this.props.addInfo}/>
			</div>
		)
	}
}

{/*-----------List Component---------------*/}
class List extends React.Component {
	render() {
		return (
			<div className="people-list">
	
				<ul className="list" >
					<FaPlusCircle className="pointer" />
					<header>
						<h2> Team memebers </h2>
						<p> You have 3 team memebers </p>
					</header>
					{this.props.people.map((person) => {
						return <Person person={person} key={person.id} selectedInfo={this.props.selectedInfo} deleteInfo={this.props.deleteInfo} />
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
		console.log(this.state)
	}

	render() {	
		return (
			<div>
				<li  className="person" onClick={this._callEdit.bind(this)}>
					<MdAccountCircle /> &nbsp;
					{this.props.person.firstName} &nbsp;
	          		{this.props.person.lastName} <br />
	          		{this.props.person.email} <br />
	          		{this.props.person.phone} <br />
	          		{this.props.person.regular === 'on' ? "Regular member" : "Admin"}
				</li>

				{this.state.show ? <Edit selectedInfo={this.props.selectedInfo} deleteInfo={this.props.deleteInfo} id={this.props.person.id} /> : null }

			</div>
		)
	}
}

{/*-----------Add Component---------------*/}
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
				
				<form className="frame" onSubmit={this._addNew.bind(this)}>
		
					<FaTimesCircle className="pointer"  />
					<header>
						<h2> Add a team memeber </h2>
						<p>Set email. location and role</p>
					</header>

					<div>
						<h3>Info</h3>
						<div className="form-feild">
							<label>First name</label>
							<input className="textarea" type="text" name="firstName"  onChange={this._handleChange.bind(this)} value={this.state.firstName} />

						</div>
						<div className="form-feild">
							<label>Last name</label>
							<input className="textarea" type="text" name="lastName" onChange={this._handleChange.bind(this)} value={this.state.lastName} />
						</div>
						<div className="form-feild">
							<label>Email</label>
							<input className="textarea"  type="text" name="email" onChange={this._handleChange.bind(this)} value={this.state.email} />
						</div>
						<div className="phone-number">
							<label>Phone</label>
							<input className="textarea"  type="text" name="phone" onChange={this._handleChange.bind(this)} value={this.state.phone} />
						</div>
					</div>

					<div className="role">
						<h3> Role </h3>
						<p>Regular Can't delete members<input type="radio" name="regular" onChange={this._handleChange.bind(this)} value={this.state.regular} /></p>
						<p>Admin  Can delete members<input type="radio" name="admin" onChange={this._handleChange.bind(this)} value={this.state.admin} /></p>
					</div>

					<input className="button" type="submit" value="Save" />
				</form>

			</div>

		)
	}
}

{/*-----------Edit Component---------------*/}

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
	_edit(e) {
		e.preventDefault();
		let id=this.props.id;
		
		this.props.selectedInfo(this.state.editingContact, id)
		
	}

	_delete() {
		let id=this.props.id;
		console.log(id);
		this.props.deleteInfo(id);
	}

	_handleChange(e) {
		let editingContact = this.state.editingContact;
		let value = e.target.value;
		let name = e.target.name;
		editingContact[name] = value;
		this.setState(editingContact);
		console.log(this.state.editingContact)

	}

	_show (){	
		this.setState({show: false});

		console.log(this.state)

	}

	render() {
		return (
			
			<div className="edit" >
				{this.state.show ?

				<form className="frame" onSubmit={this._edit.bind(this)} >
					<FaTimesCircle className="pointer"  onClick={this._show.bind(this)}/>
					<header>
						<h2> Edit team memeber </h2>
						<p> Edit contact info, location and role.</p>
					</header>

					<div>
						<h3>Info</h3>
						<div className="form-feild">
							<label>First name</label>
							<input className="textarea" type="text" name="firstName" value={this.props.firstName} onChange={this._handleChange.bind(this)} />
						</div>
						<div className="form-feild">
							<label>Last name</label>
							<input className="textarea" type="text" name="lastName" value={this.props.lastName} onChange={this._handleChange.bind(this)} />
						</div>
						<div className="form-feild">
							<label>Email</label>
							<input className="textarea" type="text" name="email" value={this.props.email} onChange={this._handleChange.bind(this)} />
						</div>
						<div className="phone-number">
							<label>Phone</label>
							<input className="textarea" type="text" name="phone" value={this.props.phone} onChange={this._handleChange.bind(this)} />
						</div>
					</div>

					<div className="role">
						<h3> Role </h3>
						<p>Regular - Can't delete members<input type="radio" name="regular" value={this.props.regular} onChange={this._handleChange.bind(this)} /></p>
						<p>Admin - Can delete members<input type="radio" name="admin" value={this.props.admin}  onChange={this._handleChange.bind(this)} /></p>
					</div>

					<input className="button" type="submit" value="Save" /> &nbsp;
					<input className="button" type="button" value="Delete" onClick={this._delete.bind(this)} />

				</form>
				: null}
		

			</div>
			

		)
	}
}


function mapStateToProps(state) {
	return {
		people:state
	};
}

export default connect (mapStateToProps,{ addInfo, selectedInfo, deleteInfo })(App);