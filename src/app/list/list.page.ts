import { Component } from '@angular/core';
import { RestService } from '../services/rest.service';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage {
  
  releases: any;

  constructor(public navCtrl: NavController, public restService: RestService) {
    this.getReleases();
  }

  getReleases() {
    this.restService.getReleases().then(data => {
      this.releases = data['value'];
      console.log(this.releases);
    });
  }
}
