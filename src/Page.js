import Footer from "./components/Footer";
import Header from "./components/Header";
import {useState} from 'react'

const Page = (props)=>{
    console.log(props)
    const [syncCount, setSyncCount] = useState(0);
    const [asyncCount, setAsyncCount] = useState(0);

    const handleSyncUpdate = ()=>{
        setSyncCount((prevState)=> prevState + 1)
    }

    const handleAsyncUpdate = ()=>{
        setTimeout(()=>{
            setAsyncCount(asyncCount + 1);
        },1000)
    }

    return (
        <div>
            <Header/>
            <main>
                <h2>Synchronous State Update</h2>
                <p>Sync Count : {syncCount}</p>
                <button onClick={handleSyncUpdate}>Increment Sync Count</button>

                <h2>Asynchronous State Update</h2>
                <p>Async Count : {asyncCount}</p>
                <button onClick={handleAsyncUpdate}>Increment Async Count</button>
            </main>
            <input value='xyz' placeholder="enter your value" type='text' pattern="" onChange={(event)=>{}}/>
            <Footer/>
        </div>
    )
}

export default Page;