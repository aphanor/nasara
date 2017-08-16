import { Component, OnDestroy, AfterViewInit } from '@angular/core';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import * as $ from 'jquery';
declare var toggleM:any;

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	private sub:any;
	constructor(private slimLoader: SlimLoadingBarService, private router: Router) {
		this.sub = this.router.events.subscribe(event => {
			if (event instanceof NavigationStart) {
				this.slimLoader.start();
			} else if ( event instanceof NavigationEnd ||
				event instanceof NavigationCancel ||
				event instanceof NavigationError) {
				this.slimLoader.complete();
			}
		}, (error: any) => {
			this.slimLoader.complete();
		});
	}
	ngAfterViewInit(): any {
		$.getScript('assets/toggle.js', function(){
			toggleM.init();
		})
	}
	ngOnDestroy(): any {
		this.sub.unsubscribe();
	}
}

