import {Controller} from 'stimulus';
import { Modal } from 'bootstrap';
import $ from 'jquery';

export default class extends Controller {
  static targets = ['modal', 'modalBody'];
  static values = {
    formUrl: String
  }

  async openModal(event) {
    this.modalBodyTarget.innerHTML = 'Loading...';
    const modal = new Modal(this.modalTarget);
    modal.show();

    this.modalBodyTarget.innerHTML = await $.ajax(this.formUrlValue);
  }

  async submitForm(event) {
    event.preventDefault();
    const $form = $(this.modalBodyTarget).find('form');
    //this.modalBodyTarget.findElementsByTagName('form')[0]

    try {
      await $.ajax({
        url: this.formUrlValue,
        method: $form.prop('method'),
        data: $form.serialize()
      })
      console.log('success');
    } catch (e) {
      this.modalBodytarget.innerHTML = e.responseText;
    }
  }
}