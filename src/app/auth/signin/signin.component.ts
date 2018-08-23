import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.css']
})
export class SigninComponent {

    constructor(
        private authService: AuthService
    ) { }

    login(form: NgForm) {
        const username = form.value.username
        const password = form.value.password
        this.authService.login(username, password)
    }
}
