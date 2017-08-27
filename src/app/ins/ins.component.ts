import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { HttpServiceService } from '../http-service.service';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'app-ins',
  templateUrl: './ins.component.html',
  styleUrls: ['./ins.component.css']
})

export class InsComponent implements OnInit {

    private submitted:boolean = false;

    constructor(private http: HttpServiceService) {}

    emailFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(EMAIL_REGEX)]);

    nSubmit(w,x,y,z) {
        this.http.postData(w,x,y,z).subscribe(data => {
            console.log(data);
            this.submitted = true;
        },
        error => console.error('An error occured.'));
    }
  
    ngOnInit() {
    }

}
