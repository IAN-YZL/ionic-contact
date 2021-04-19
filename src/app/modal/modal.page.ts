import { Component, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage {
  @Input() firstName: string;
  @Input() lastName: string;
  @Input() email: string;

  constructor(navParams: NavParams, public modalComponent: ModalController) {
    this.firstName = navParams.get('firstName');
    this.lastName = navParams.get('lastName');
    this.email = navParams.get('email');
  }

  dismiss() {
    this.modalComponent.dismiss({
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email
    });
  }
}
