import { Component } from '@angular/core';
import { ApplicationService } from '../../application.service';
import { Store } from '@ngrx/store';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-create-post',
    templateUrl: './create-post.component.html',
    styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {
    post: string

    constructor(
        private applicationService: ApplicationService
    ) { }

    createPost(form: NgForm) {
        const date = new Date(Date.now()).toUTCString()
        const postBody = {
            time: {
                lmt: date,
                ect: date
            },
            uid: this.applicationService.getUserId(),
            author: localStorage.getItem('username'),
            post: this.post
        }
        form.resetForm()
        this.applicationService.createPost(postBody)
    }
}
