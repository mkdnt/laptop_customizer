import React, { Component } from 'react';
import Feature from './Feature';

export class Customizer extends Component {
    render() {
 
        return (
            <div>
                <form className="main__form">
                <h2>Customize your laptop</h2>
                <Feature 
                features={this.props.features}
                selected={this.props.selected}
                updateFeature={this.props.updateFeature}
                />
                </form>
            </div>
        )
    }
}

export default Customizer
