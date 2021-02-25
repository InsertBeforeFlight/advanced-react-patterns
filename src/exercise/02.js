// Compound Components
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'
import {Switch} from '../switch'

const ToggleOn = ({ children, on }) => on ? children : null;

const ToggleOff = ({ children, on }) => on ? null : children;

const ToggleButton = ({ on, toggle }) => (
  <Switch on={on} onClick={toggle} />
)

const JoshToggleButton = ({ on }) => on ? "Oh wow, it's on!" : "Oh dear, it's off!";

const AllowedElementTypes = [ToggleOn, ToggleOff, ToggleButton, JoshToggleButton];

function Toggle({ children }) {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)

  return  React.Children.map(children, child => {
    if (!AllowedElementTypes.includes(child.type)) return null;
    return React.cloneElement(child, { on, toggle });
  });
}

function App() {
  return (
    <div>
      <Toggle>
        <ToggleOn>The button is on</ToggleOn>
        <ToggleOff>The button is off</ToggleOff>
        <span>Hello!</span>
        <ToggleButton />
        <JoshToggleButton />
      </Toggle>
    </div>
  )
}

export default App

/*
eslint
  no-unused-vars: "off",
*/
