import { Controller } from 'stimulus';

export default class extends Controller {
  selectColor(event) {
    console.log(event.target, event.currentTarget);
    //console.log(event.currentTarget.classList.add('selected'));
  }
}
