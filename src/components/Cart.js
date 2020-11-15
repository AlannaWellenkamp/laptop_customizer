import React, { Component } from 'react';
import CartItem from './CartItem';
import CartTotal from './CartTotal';

class Cart extends Component {

    render() {
        const summary = Object.keys(this.props.selected).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = this.props.selected[feature];

            return (
                <CartItem
                    feature={feature}
                    featureHash={featureHash}
                    selectedOption={selectedOption}
                    key={selectedOption.name}
                    cost={selectedOption.cost}
                />
            );
        });

        return (
            <section className='main_summary'>
                <h2>Your Cart</h2>
                {summary}
                <CartTotal selected={this.props.selected} />
            </section>
        );
    }
}

export default Cart