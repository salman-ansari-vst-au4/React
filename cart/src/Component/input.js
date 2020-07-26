import React from 'react';
import {bindActionCreators} from 'redux'
import { connect } from "react-redux";
import Action from '../ActionCreator/action'
let input = Action.input;
class Input extends React.Component {
    state = {
        name: ""
    }

    render() {
        return (

            <div className="">
                <input type="text"
                    value={this.state.name}
                    onChange={(event) => {
                        this.setState({
                            name: event.target.value
                        })
                    }} />
                <button onClick={() => { this.props.input(this.state.name) }}>Submit</button>
            </div>

        );
    }
}

const take = (state) => {
    return {
        submit: state.input.name
    };
}

const change = (dispatch) => {
    return bindActionCreators({input},dispatch)
}

export default connect(take, change)(Input);
