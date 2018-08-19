
//Types
const INPUT_SUBMIT = 'react-redux-ducks/toDoApp/INPUT_SUBMIT'
const LIST_ITEM_CLICK = 'react-redux-ducks/toDoApp/LIST_ITEM_CLICK'
const DELETE_LIST_ITEM = 'react-redux-ducks/toDoApp/DELETE_LIST_ITEM'


//Actions
export function listItemClick(index){
    return {
        type: LIST_ITEM_CLICK,
        index
    }
}

export function deleteListItem(index){
    return {
        type: DELETE_LIST_ITEM,
        index
    }
}

export function inputSubmit(value){
    return {
        type: INPUT_SUBMIT,
        value
    }
}

//init state
const initialState = {
    list: [{item: 'test',done:false}],
    newtodo: ''
}

//reducer
export default function reducer(state=initialState,action){
    switch(action.type){
        case INPUT_SUBMIT:
            return {
                ...state,               
                list: [...state.list,{item:action.value,done:false}],
            }
        case LIST_ITEM_CLICK:         
            [...state.list][action.index].done = !state.list[action.index].done
            return {
                ...state,
                list: [...state.list]
            }
        case DELETE_LIST_ITEM:           
            [...state.list].splice(action.index,1)
            return {
                ...state,
                list: [...state.list]
            }
        default: 
            return state
    }
}
