import { Controller } from 'stimulus';

export default class extends Controller {
  selectColor() {
    console.log(this.element.innerHTML);
  }
}
