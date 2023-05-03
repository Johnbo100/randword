import React from 'react'

export default function Letters(props) {
  return (
    <div id="LettersWrapper">
        {props.alpha.map((item) => (
          <div className="letterButton">{item}</div>
        ))}
    </div>
  )
}
