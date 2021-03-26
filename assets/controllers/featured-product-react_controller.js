import { Controller } from 'stimulus';
import ReactDom from 'react-dom';
import React from 'react';
import FeaturedProduct from '../components/FeaturedProduct';
import MadeWithLove from "../components/MadeWithLove";

export default class extends Controller {
    static values = {
        product: Object
    }

    connect() {
        ReactDom.render(
            <FeaturedProduct product={this.productValue}/>,
            this.element
        )
    }
}