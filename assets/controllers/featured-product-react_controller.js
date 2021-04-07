import { Controller } from 'stimulus';
import React from 'react';
import FeaturedProduct from '../components/FeaturedProduct';
import MadeWithLove from "../components/MadeWithLove";

export default class extends Controller {
    static values = {
        product: Object
    }

    connect() {
        import('react-dom').then((ReactDom) => {
            ReactDom.default.render(
              <FeaturedProduct product={this.productValue}/>,
              this.element
            )
        });
    }
}