import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  lat: number = 45.533845;
  lng: number = -73.598305;
  zoom: number = 17;

  constructor(private route: ActivatedRoute, private router: Router) {

  }

  redirect() {
	this.router.navigate(['/inscription'], { relativeTo: this.route });
  }

  ngOnInit() {
  }

}
