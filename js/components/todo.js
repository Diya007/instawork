//submit form doesn't submit when hit enter;
// e.target.value会track你键盘输入的event
// e.target.name will return the name value of the input, eg. name="firstname" e.target.name = firstname
// e.target.value has nothing to do with the value attribute in input  value="hello"
// what is key in list component
// using bind(this) to bind the function with the whole component to allow it access the state;
// need to add role in state in reducers for each object
// set ratio input to blank after submit
// can't deploy it on heroku

   edit frame {
   	right: 25px;
    position: fixed;
    top: 10px;

   } 


function handleRole (e) { const { regular, admin } = this.state if (e.target.name === 'regular' && e.target.value) { this.setState({regular: true, admin: false}) } else if (e.target.name === 'admin' && e.target.value) { this.setState({regular: false, admin: true}) } }