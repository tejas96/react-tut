import React from 'react';
import  {createRoot}  from "react-dom/client";
import App from './App';
import JsxTut from './JsxTut';

const rootDiv = document.getElementById('root');
const root = createRoot(rootDiv);
root.render(<><App/></>);