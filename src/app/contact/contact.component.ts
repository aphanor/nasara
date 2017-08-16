import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

    lat: number = 45.5262469;
    lng: number = -73.6072142;

    constructor() {}

    ngOnInit() {
    }

}
