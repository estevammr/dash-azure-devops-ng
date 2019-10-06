import { Component } from '@angular/core';
import { RestService } from '../services/rest.service';
import { NavController } from '@ionic/angular';
import { interval } from 'rxjs';
@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage {
  
  releases: any;

  constructor(public navCtrl: NavController, public restService: RestService) {
    interval(10000).subscribe((val) => {
      this.getReleases();
    });
  }

  getReleases() {
    this.restService.getReleases().then(data => {
      this.releases = data['value'];
      console.log(this.releases);
    });
  }

  ngOnInit() {
    this.getReleases();
  }
}
