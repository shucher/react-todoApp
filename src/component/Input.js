
import React from 'react'

class Input extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            todo: ''
        }
    }
    onInputChange = (e) => {
        this.setState({
            todo: e.target.value
        })
    }

    onInputSubmit = (e) => {
        e.preventDefault()
        if(this.state.todo){
            this.props.onSubmit(this.state.todo)
        }
        this.setState({
            todo: ''
        })
    }

    render(){
        return (
            <div>
                <div className="form-group">
                    <br/><br/>
                    <input
                        type="text"
                        className="form-control"
                        id="listItemInput"
                        placeholder="new to do"
                        value={this.state.todo}
                        onChange={this.onInputChange}
                    /><br/>
                    <button
                        onClick={this.onInputSubmit}
                        className="btn btn-primary">
                        Add Item
                    </button>
                </div>
            </div>
        )
    }
}

export default Input