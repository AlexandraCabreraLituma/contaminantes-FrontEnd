import {Component, OnInit} from '@angular/core';
import {HttpService} from '../shared/service/http.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isSeesion = false;
  notSeesion = true;

  constructor(private conex: HttpService) {

  }

  ngOnInit() {
  }


}
