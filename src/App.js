import React, { Fragment, useState } from 'react';
import {validateEmail,userIds,useState as myUseState} from './helper/utilities'

// functional component
// class component

// with jsx
function App(){
    myUseState()
    const [state, setState] = useState();
    const [error, setError] = useState('');
    function handleSubmitButton(){
       const isEmailValid =  validateEmail(state);
       if(isEmailValid){
        setError('Success')
       }else{
        setError('error')
       }
    }

    function handleOnchange(event){
        setState(()=>event.target.value)
    }

    return <>
        <div onClick={()=>{}} className='hello-div'>
            <h1>Hello Rect</h1>
            <p>This a demo of react application</p>
        </div>
        <div>
            <input value={state} onChange={handleOnchange}  type='email'/>
        </div>
        <div>
            <span>{error}</span>
        </div>
        <div>
            <button onClick={handleSubmitButton}>Submit</button>
        </div>
        </>
     
}

export default App;