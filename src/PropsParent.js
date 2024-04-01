import { useState } from "react";
import PropsTut from "./PropsTut";
import Header from './components/Header';
const PropsParent = ()=>{
    const [value, setValue] = useState(0)
    const handleBtnClick = ()=>{
        setValue(Math.floor(Math.random()*100))
    }
    return <>
        <Header title="This is PropsParent page" link={<a href="http://localhost:3000/">localhost</a>}/>
        <button onClick={handleBtnClick}>dynamicPropsChanger</button>
        <PropsTut tutorialNumber={value} />
    </>
}

export default PropsParent;