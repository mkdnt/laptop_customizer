import React, { Component } from 'react'
import Summary from './Summary'
import Total from './Total'

export class Cart extends Component {
    render() {




        return (
            <div>
            <section className="main__summary">
            <h2>Your cart</h2>
            <Summary selected={this.props.selected} />
            <Total selected={this.props.selected} />
          </section>
            </div>
        )
    }
}

export default Cart
