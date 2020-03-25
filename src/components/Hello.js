import React from 'react'

const Hello = () => {
    // return (
    //     <div>
    //         <h1 className="dummyClass">Hello Cecep</h1>
    //     </div>
    // )
    return React.createElement(
        'div',
        {id : 'hello', class: 'dummyClass'}, 
        React.createElement('h1', null, 'Hello Cecep'));
}

export default Hello
