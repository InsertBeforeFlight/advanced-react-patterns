// Prop Collections and Getters
// http://localhost:3000/isolated/exercise/04.js

import * as React from 'react'
import {Switch} from '../switch'

const callAllFunctions = (...allFunctions) =>
  (...args) => allFunctions.forEach(f => f && f(...args));

function useToggle() {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)

  const getToggleProps = ({ onClick, ...overrides } = {}) => ({
    "aria-pressed": "on",
    onClick: callAllFunctions(toggle, onClick),
    ...overrides,
  })

  return {on, toggle, getToggleProps}
}

function App() {
  const {on, getToggleProps} = useToggle()

  const onClick = () => console.info("You clicked something!");

  return (
    <div>
      <Switch on={on} {...getToggleProps({ onClick })} />
      <hr />
      <button
        {...getToggleProps({
          "aria-label": "custom-button",
          onClick,
          id: 'custom-button-id',
        })}
      >
        {on ? 'on' : 'off'}
      </button>
    </div>
  )
}

export default App
