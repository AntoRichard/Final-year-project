import React, {Component} from 'react'
import {Form} from '../Utils/Form';
import axios from 'axios';

class InputFeild extends Component {

    state = {
        code: '',
        subject: ''
    }

    onChangeHandler = event => this.setState({[event.target.name]: event.target.value});
    submitHandler = async () => {
       try {
           const response = await axios.post('/subject', this.state);
           console.log(response.data);
           this.props.updateSubject(this.state.subject, this.state.code);
       } catch (err) {
            console.log(err.message)
       }
    }   
    render(){
        const {code, subject} = this.state;
        return (
            <div >
                <div style={{textAlign: 'center'}}>
                    <h2>ADD <span style={{color: '#20232A'}}>SUBJECT</span></h2>
                </div>
                <div style={{marginTop: '30px', padding: '18px 350px'}}>
                    <Form value="SUBJECT CODE" placeholder="Enter the subject code" inputValue={code} name="code" onChangeHandler={this.onChangeHandler}/>
                    <Form value="SUBJECT NAME" placeholder="Enter the subject name" inputValue={subject} name="subject" onChangeHandler={this.onChangeHandler}/>
                    <button className="btn btn-primary btn-block" onClick={this.submitHandler}>ADD</button>
                </div>
            </div>
        )
    }
}


export default InputFeild;