import React from 'react'

export default function unitItem(props) {
    return (
      <fieldset className="feature" key={props.featureHash}>
        <legend className="feature__name">
          <h3>{props.feature}</h3>
        </legend>
        {props.options}
      </fieldset>
    )
}
