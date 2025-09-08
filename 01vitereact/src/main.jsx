import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

function MyApp() {
  return (
    <div >
      <h1 >Custom React | Kartik</h1>
    </div>
  )
}
// const ReactElement = {
//     type :'a',
//     props : {
//      href : 'https://www.google.com',
//      target : '_blank',

//     },
//     Children : 'Click Me to visit Google'
// }

const anothetheElement = (
  <a href="https://www.google.com" target="_blank">Click Me to visit Google</a>
)


const anotherElement2 = "kartik"
const reactElement = React.createElement(
  'a',
  {
    href: 'https://www.google.com',
    target: '_blank'
  },
  'Click Me to visit Google',
  anotherElement2
)
ReactDOM.createRoot(document.getElementById('root')).render(

 reactElement

)
