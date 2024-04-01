import React from 'react';
import  {createRoot}  from "react-dom/client";
import App from './App';
import JsxTut from './JsxTut';
import Page from './Page';
import PropsTut from './PropsTut';
import PropsParent from './PropsParent';

const rootDiv = document.getElementById('root');
const root = createRoot(rootDiv);
root.render(<PropsParent />);