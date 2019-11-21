import {Component, OnInit} from '@angular/core';
// import { DataService } from '../data.service';
import {settings} from '../data.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  // attestationActions = [];

  // constructor(private dataService: DataService) { }

  ngOnInit() {
    // this.attestationActions =  this.dataService.getAttestationActions();
    // console.log( JSON.stringify(this.attestationActions) );
    // this.attestationActions[0].deviceBlock = 10;
    console.log( JSON.stringify(settings.css) );
    settings.css = 'aaa {}';

  }
}
