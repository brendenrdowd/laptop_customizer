import React from 'react';
import slugify from 'slugify';
import UnitItem from './unitItem'

export default function CustomList(props) {
  //this is taking every key from the store (i.e. processor) and mapping through that array
  //this is being used by app.js ln 86, so we'll need to access it? i think?
  const features = Object.keys(props.features).map((feature, idx) => {
    //this is creating a key
    const featureHash = feature + '-' + idx;
    // this is grabing the feature keyword from our map ^
    const options = props.features[feature].map(item => {
      //giving it an id
      const itemHash = slugify(JSON.stringify(item));
      return (
        //for each item in the array (2) we're creating a 'component'
        <UnitItem itemHash={itemHash} feature={feature} item={item} {...props} />
      );
    })
    return (
      <fieldset className="feature" key={featureHash}>
        <legend className="feature__name">
          <h3>{feature}</h3>
        </legend>
        {options}
      </fieldset>
    );
  });
  return features;
}