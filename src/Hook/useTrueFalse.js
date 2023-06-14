import { useState } from 'react'

export const useTrueFalse = (init) => {
  const [state, setState] = useState(init)

  const toggle = () => {
    setState(!state)
  }
  return [state, toggle]
}
