import React from 'react';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

export default function PriceItem (props){
    return(
      <div className="summary__option" key={props.featureHash}>
        <div className="summary__option__label">{props.feature} </div>
        <div className="summary__option__value">{props.selectedOption.name}</div>
        <div className="summary__option__cost">
          {USCurrencyFormat.format(props.selectedOption.cost)}
        </div>
      </div>
    );

}