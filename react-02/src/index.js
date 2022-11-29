/* React-17
import ReactDom from 'react-dom'
import App from './App'
ReactDom.render(<App/>, document.getElementById("kishore")) */

//  React-18
 import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App'

const root = ReactDom.createRoot(document.getElementById("kishore"))
root.render(
<React.StrictMode>
    <App />
</React.StrictMode>)