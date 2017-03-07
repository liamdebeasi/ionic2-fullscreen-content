import { Component } from '@angular/core';
import { ContactPage } from '../contact/contact';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
    
    public items: Array<number> = [];

  constructor(public navCtrl: NavController) {
    this.navCtrl = navCtrl;
    
    for (var i = 0; i < 100; i++) {
        this.items.push(i);
    }
  }
  
  push(): void {
      this.navCtrl.push(ContactPage);
  }

}
