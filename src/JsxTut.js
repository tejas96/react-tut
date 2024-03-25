import React from 'react';
import ReactLogo from './assets/logo192.png';
import './styles.css'
const JsxTut = ()=>{
    /////////////// Embedding Expressions /////////////
    // const world = 'world!'
    // const element = <h1>Hello, {world} {[1,2,3,40].map(item=>item * 2)}</h1>

    /////////////// Attributes /////////////
    // const element =<img src={ReactLogo} alt="Logo"/>
    // return element;

    /////////////// Children /////////////
    // const element = (
    //     <div>
    //         <h1>Hello, World</h1>
    //         <p>Welcome to my react app</p>
    //     </div>
    // )
    // return element;

    /////////////// Self closing tag /////////////
    // const element = <input type='email'/>
    // return element;

    /////////////// comments /////////////
    // const element = (
    //         <div>
    //             {/*<h1>Hello, World</h1>
    //             <p>Welcome to my react app</p>*/}
    //         </div>
    //     )

    // return element

    /////////////// className vs. class /////////////
    // const world = 'world'
    // const element = <div className='container'>{world}</div>
    // return element;

    /////////////// Babel /////////////
    // const element = <h1>Hello, World</h1>
    // transform code by babel
    // const element = React.createElement('h1', null, 'Hello, World')
    // return element;

    /////////////// JSX FRAGMENT /////////////
    //const element = <>
    // <h1>Hello, World</h1>
    // <p>Welcome to my react app</p>
    // </>
    // return element
}

export default JsxTut;