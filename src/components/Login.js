//class component
import React from 'react'

export default class Login extends React.Component {

    constructor (props) { //function definition, which has a function body
        super(props) //this is a function call
        this.state = {
            name: (props.initialMessage),
            fName: '',
            lName:'',
        }
        
        this.onClickHandler = this.onClickHandler.bind(this)
        this.onChangeHandler = this.onChangeHandler.bind(this)
    } //end of constructor function
    onClickHandler() {
        this.setState({name: 'New Message'})
    }
    onChangeHandler(event) {
        this.setState({[event.target.name]: event.target.value})
        
       
    }
    
    render () {

        return (
            <div>
            <h1>{this.state.name}</h1>
            <h2>{this.state.fName} {this.state.lName}</h2> 
            <button onClick={this.onClickHandler} >Click for Answer</button>
            <br></br>
            <br></br>
            
            First Name <input onChange={this.onChangeHandler} name="fName" value={this.state.fName}></input>
            <br></br>
            <br></br>
            Last Name <input onChange={this.onChangeHandler} name="lName" value={this.state.lName}></input>

            </div>
        )


    }



}