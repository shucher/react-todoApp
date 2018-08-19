import React from 'react'

const List = (props) => {

    const list = props.listItems.map((el,i)=>{
        return <li key={i}>
        <span
        style={
            el.done
            ?{textDecoration: 'line-through', fontSize: '20px'}
            :{textDecoration: 'none', fontSize: '20px'}
        }
        onClick={props.onClick.bind(null,i)}
        >{el.item}</span></li>
    })
    return (
        <div>
            <ul>
                {list}
            </ul>
        </div>
    )
}

export default List