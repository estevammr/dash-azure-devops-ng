import { Component } from '@angular/core';
import { RestService } from '../services/rest.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  builds: any;

  constructor(public navCtrl: NavController, public restService: RestService) {
    this.getBuilds();
  }

  getBuilds() {
    this.restService.getBuilds().then(data => {
      this.builds = data['value'];
      console.log(this.builds);
    });
  }
}
