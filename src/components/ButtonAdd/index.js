import React from 'react'

import { ButtonBackground } from './styles'

const ButtonAdd = (props) => {
  return (
    <ButtonBackground onClick={props.onClick}>
      <button className="plus"></button>
    </ButtonBackground>
  )
}

export default ButtonAdd
