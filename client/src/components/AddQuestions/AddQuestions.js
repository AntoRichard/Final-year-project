import React, { Component } from 'react'
import Intro from './Display/Intro'
import Two from './Display/Two/Two';
import ShowAnswers from './Display/Two/ShowAnswers';
import Fifteen from './Display/Fifteen/Fifteen'
import axios from 'axios';

class AddQuestions extends Component {
    
    state = {
        sub: null,
        two: [],
        fifteen: [],
        showTwo: true
    }
    updateSub = value => this.setState({sub: value});

    updateTwo = value => this.setState({two: [...this.state.two, value]});

    updateFifteen = value => this.setState({fifteen: [...this.state.fifteen, value]});

    submitHandler = async () => {
         await axios.post('/questions', this.state);
    }

    render() {
        const {sub, two, showTwo, fifteen} = this.state;
        if(sub === null) {
            return (
                <div className="dashboard-container">
                    <Intro updateSub={this.updateSub}/>
                </div>   
            )
        }
        if(showTwo){
            return (
                <div className="dashboard-container" >
                    <div style={{margin:'10px 100px'}}>
                        <Two sub={sub}  updateTwo={this.updateTwo}/>
                        <ShowAnswers two={two}/>
                        {two.length === 10 ? <button className="btn btn-success" style={{float: 'right',marginBottom: '6%'}} onClick={this.setState({showTwo: false})}>SUBMIT</button>: null}
                    </div>
                </div>
            )
        }else{
            return (
                <div className="dashboard-container">
                    <div style={{margin:'10px 100px'}}>
                        <Fifteen sub={sub} updateFifteen={this.updateFifteen}/>
                        <ShowAnswers two={fifteen}/> 
                        {fifteen.length === 5 ? <button className="btn btn-success" style={{float: 'right',marginBottom: '6%'}} onClick={this.submitHandler}
                        >SUBMIT</button>: null}
                    </div>
                </div>
            )

        }
    }
}

export default AddQuestions;