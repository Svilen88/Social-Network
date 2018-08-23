import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'socia-network';

    ngOnInit(): void {
        firebase.initializeApp({
            apiKey: 'AIzaSyBvaKESem0IajpGRt80RfXtPMaJIDXzEug',
            authDomain: 'socia-network-f86d8.firebaseapp.com',
            databaseURL: 'https://socia-network-f86d8.firebaseio.com'
        })
    }
}
