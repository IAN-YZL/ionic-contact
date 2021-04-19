import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  firstName: string;
  lastName: string;
  email: string;
  contacts = [{firstName:'Fran',lastName:'Jipani',email:'f.jipani@griffith.edu.au'},
  {firstName:'Fran2',lastName:'Jipani2',email:'f.jipani2@griffith.edu.au'},
  {firstName:'Fran3',lastName:'Jipani3',email:'f.jipani3@griffith.edu.au'},
  {firstName:'Fran4',lastName:'Jipani4',email:'f.jipani4@griffith.edu.au'}];
  constructor(private modalController: ModalController){}

  async addContact() {
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: {
      }
    });

    modal.onDidDismiss().then(data => {
      console.log(data);
    });

    return await modal.present();
  }

}
