import React from 'react'

function Btn(props) {
    return (
    <button className={props.className} type="submit">{props.text}</button>
    )
}

export default Btn
// i made this component, just for practice 
// that how can you pass a small component 
// inside another component.