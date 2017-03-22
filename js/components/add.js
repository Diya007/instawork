import React, { Component } from 'react';	
import { connect } from 'react-redux';
import { addInfo, selectedInfo } from '../actions/index';
import FaPlusCircle from 'react-icons/lib/fa/plus-circle';
import FaTimesCircle from 'react-icons/lib/fa/times-circle';
import MdEdit from 'react-icons/lib/md/edit';


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
							<input type="text" name="firstName"  onChange={this._handleChange.bind(this)} value={this.state.firstName} />

						</div>
						<div className="form-feild">
							<label>Last name</label>
							<input type="text" name="lastName" onChange={this._handleChange.bind(this)} value={this.state.lastName} />
						</div>
						<div className="form-feild">
							<label>Email</label>
							<input type="text" name="email" onChange={this._handleChange.bind(this)} value={this.state.email} />
						</div>
						<div className="phone-number">
							<label>Phone</label>
							<input type="text" name="phone" onChange={this._handleChange.bind(this)} value={this.state.phone} />
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


function mapStateToProps(state) {
	return {
		people:state
	};
}

export default connect (mapStateToProps,{addInfo, selectedInfo})(App);