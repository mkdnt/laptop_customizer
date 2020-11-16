import React, { Component } from 'react';
import FEATURES from './store'
import Option from './Option';
// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';
// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});


export class Feature extends Component {
    render() {
return Object.keys(FEATURES).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const options = FEATURES[feature].map(item => {
              const itemHash = slugify(JSON.stringify(item));
              return (
                <Option
                    key={itemHash}
                    itemHash={itemHash}
                    name={slugify(feature)}
                    checked={item.name === this.props.selected[feature].name}
                    updateFeature={this.props.updateFeature}
                    feature={feature}
                    item={item}
                    cost={USCurrencyFormat.format(item.cost)}
                />
              );
            });

    return   (
          <div>
        <fieldset className="feature" key={featureHash}>
          <legend className="feature__name">
            <h3>{feature}</h3>
          </legend>
          {options}
        </fieldset>
        </div>
      );
})
    }
  }

export default Feature
