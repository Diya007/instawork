import React, { Component } from 'react';	
import { connect } from 'react-redux';
import { addInfo } from '../actions/index'
//import List from './list';

// import styled from 'styled-components';

// const AppWrapper = styled.div‘
// 	display : flex;

// ’
class App extends React.Component {
	render() {
		return (
			<div id='app'>
				<h1> Address book</h1>
				<List people={this.props.people} />
				<Add addInfo={this.props.addInfo}/>
				<div> you have 4 team memebers</div>
				<div>list</div>
			</div>
		)
	}
}


class List extends React.Component {
	_edit () {
		console.log('edit1')

	}
	render() {
		return (
			<div className="people-list">
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
	render() {
		return (
			<li>
				{this.props.person.firstName} <br />
          		{this.props.person.lastName} <br />
          		{this.props.person.email} <br />
          		{this.props.person.phone} <br />
			</li>
		)
	}
}



class Add extends React.Component {
	constructor() {
    	super();
    	this.state = {
    		firstName:"",
			lastName:"",
			email:"",
			phone:""
    	}
      
    }
	_addNew (e) {
		e.preventDefault();
		this.props.addInfo(this.state);
		// this.props.dispatch(addInfo(this.state))
	}

	_handleChange (e) {
		// console.log(e)
		// console.log(this.state)
		let state = this.state;
		let value = e.target.value;
		let name = e.target.name;
		state[name] = value;
		this.setState(state);

		//console.log(this.state)
	}

	render() {
		console.log(this);

		return (		
			<div className="add">
				<header>
					<h2> Add a team memeber </h2>
					<p>Set email. location and role</p>
				</header>

				<div className="add-form">
					<h3>Info</h3>
					<form onSubmit={this._addNew.bind(this)}>
						<div className="form-feild">
							<label>First name</label>
							<input type="text" name="firstName"  onChange={this._handleChange.bind(this)}  ref="firstName"/>

						</div>
						<div className="form-feild">
							<label>Last name</label>
							<input type="text" name="lastName" onChange={this._handleChange.bind(this)} value={this.props.lastname} ref="lastName" />
						</div>
						<div className="form-feild">
							<label>Email</label>
							<input type="text" name="email" onChange={this._handleChange.bind(this)} value={this.props.email} ref="email" />
						</div>
						<div className="phone-number">
							<label>Phone</label>
							<input type="text" name="phone" onChange={this._handleChange.bind(this)} value={this.props.phone} ref="phone" />
						</div>

						<input type="submit" value="Submit" />

					</form>
				</div>

			</div>

		)
	}
}


// class Edite extends React.Component {
	
// 	render() {
// 		return (
// 			<div id="add">
// 				<header>
// 					<h2> Add a team memeber </h2>
// 					<p>Set email. location and role</p>
// 				</header>

// 				<div className="add-form">
// 					<h3>Info</h3>
// 					<form onSubmit={this._addNew}>
// 						<div className="form-feild">
// 							<label>First name</label>
// 							<input type="text" name="firstName"  onChange={this._handleChange}  ref="firstName"/>
// 						</div>
// 						<div className="form-feild">
// 							<label>Last name</label>
// 							<input type="text" name="lastName" value={this.props.lastname} ref="lastName" />
// 						</div>
// 						<div className="form-feild">
// 							<label>Email</label>
// 							<input type="text" name="email" value={this.props.email} ref="email" />
// 						</div>
// 						<div className="phone-number">
// 							<label>Phone</label>
// 							<input type="text" name="phone" value={this.props.phone} ref="phone" />
// 						</div>

// 						<input type="submit" value="Submit" />

// 					</form>
// 				</div>

// 			</div>

// 		)
// 	}
// }


function mapStateToProps(state) {
	return {
		people:state
	};
}

// function mapDispatchToProps(dispatch) {
// 	return {

// 	}
// }
// export default connect (
// 	state => ({
// 		people: state
// 	}),
// 	{ addInfo }
// )(App);

export default connect (mapStateToProps,{addInfo})(App);