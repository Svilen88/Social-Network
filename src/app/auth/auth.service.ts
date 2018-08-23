import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import * as firebase from 'firebase'

const baseUrl = 'https://socia-network-f86d8.firebaseio.com/posts/'

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    token: string = null

    constructor(
        private router: Router,
        private toastr: ToastrService,
    ) { }

    login(email: string, password: string, author?: string) {
        return firebase.auth()
            .signInWithEmailAndPassword(email, password)
            .then(res => {
                this.toastr.success('Logged In', 'Success')
                const cUser = firebase
                    .auth()
                    .currentUser
                cUser.getIdToken()
                    .then((token: string) => {
                        this.token = token
                        localStorage.setItem('token', token)
                        if (author) {
                            localStorage.setItem('username', author)
                            this.router.navigate(['/application/wall'])
                        } else {
                            const uId = cUser.uid
                            firebase.database()
                                .ref('users')
                                .child(`${uId}/author`)
                                .once('value', snapshot => {
                                    localStorage.setItem('username', snapshot.val())
                                })
                            this.router.navigate(['/application/wall'])
                        }
                    })
            })
            .catch(err => {
                this.toastr.error(err.message, 'Warning')
            })
    }

    register(email: string, author: string, password: string) {
        firebase.auth()
            .createUserWithEmailAndPassword(email, password)
            .then(res => {
                this.toastr.success('Signed Up!', 'Success')
                const uid = res.user.uid
                this.login(email, password, author)
                    .then(() => {
                        firebase.database()
                            .ref()
                            .child('users')
                            .child(uid)
                            .set({
                                email,
                                author
                            })
                    })

            })
            .catch(err => {
                this.toastr.error(err.message, 'Warning')
            })
    }

    isAuthenticated(): boolean {
        return this.token !== null ? true : false
    }

    getToken() {
        firebase
            .auth()
            .currentUser
            .getIdToken()
            .then((token: string) => {
                this.token = token
            })
        return this.token
    }

    getUserId() {
        return firebase
            .auth()
            .currentUser
            .uid
    }

    logout() {

    }
}
