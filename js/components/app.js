import React, { Component } from 'react';	
//import List from './list';

// import styled from 'styled-components';

// const AppWrapper = styled.div‘
// 	display : flex;

// ’


export default class App extends React.Component {
	render() {
		return (
			<div id='app'>
				<h1> Address book</h1>

				<List />
				<Add />
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
			<div id="list">
				<li onClick={this._edit}>1</li>
				<li>2</li>
				<li>3</li>
			</div>
		)
	}
}

class Add extends React.Component {
	_addNew (e) {
		e.preventDefault();
		let firstName = this.refs.firstName.value;
		// let lastName = this.refs.lastName.value;
		// let email = this.refs.email.value;
		// let phone = this.refs.phone.value;
		let value = e.target.value;
		console.log('submit', firstName);

	}

	_handleChange (e) {
		let value = e.target.value;
		console.log(value);
	}

	render() {
		return (
			<div id="add">
				<header>
					<h2> Add a team memeber </h2>
					<p>Set email. location and role</p>
				</header>

				<div className="add-form">
					<h3>Info</h3>
					<form onSubmit={this._addNew}>
						<div className="form-feild">
							<label>First name</label>
							<input type="text" name="firstName"  onChange={this._handleChange}  ref="firstName"/>
						</div>
						<div className="form-feild">
							<label>Last name</label>
							<input type="text" name="lastName" value={this.props.lastname} ref="lastName" />
						</div>
						<div className="form-feild">
							<label>Email</label>
							<input type="text" name="email" value={this.props.email} ref="email" />
						</div>
						<div className="phone-number">
							<label>Phone</label>
							<input type="text" name="phone" value={this.props.phone} ref="phone" />
						</div>

						<input type="submit" value="Submit" />

					</form>
				</div>

			</div>

		)
	}
}


class Edite extends React.Component {
	
	render() {
		return (
			<div id="add">
				<header>
					<h2> Add a team memeber </h2>
					<p>Set email. location and role</p>
				</header>

				<div className="add-form">
					<h3>Info</h3>
					<form onSubmit={this._addNew}>
						<div className="form-feild">
							<label>First name</label>
							<input type="text" name="firstName"  onChange={this._handleChange}  ref="firstName"/>
						</div>
						<div className="form-feild">
							<label>Last name</label>
							<input type="text" name="lastName" value={this.props.lastname} ref="lastName" />
						</div>
						<div className="form-feild">
							<label>Email</label>
							<input type="text" name="email" value={this.props.email} ref="email" />
						</div>
						<div className="phone-number">
							<label>Phone</label>
							<input type="text" name="phone" value={this.props.phone} ref="phone" />
						</div>

						<input type="submit" value="Submit" />

					</form>
				</div>

			</div>

		)
	}
}


