import React from 'react'
import List from './List'
import Input from './Input'

class ToDoApp extends React.Component{
   
    onInputSubmit = (value) => {
        this.props.inputSubmit(value)
    }

    onListItemClick = (i) => {
        this.props.listItemClick(i)
    }

    render(){
        console.log('render===',this.props)
        return (
            <div className="row">
                <div className="col-md-10 col-md-offset-1">
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <h1>My To Do App</h1><hr/>
                            <List 
                            listItems={this.props.toDoApp.list} 
                            onClick={this.onListItemClick}
                            ></List>
                            <Input                        
                            onSubmit={this.onInputSubmit}                       
                            ></Input>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ToDoApp