import { connect } from 'react-redux'
import ToDoApp from '../component/ToDoApp'
import {
    inputSubmit,
    deleteListItem,
    listItemClick
  } from '../redux/modules/toDoApp';

function mapStateToProps(state){
    return {
        toDoApp: state.toDoApp
    }
}

function mapDispatchToProps(dispatch){
    return {
        inputSubmit: (value)=>dispatch(inputSubmit(value)),
        deleteListItem: (i)=>dispatch(deleteListItem(i)),
        listItemClick: (i)=>dispatch(listItemClick(i))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ToDoApp)