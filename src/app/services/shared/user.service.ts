import { Injectable, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer'; 

import { User } from 'app/classes/user';

@Injectable()
export class UserService {

    public user: User;
    public userChange: Observable<User>;
    public userChangeObserver: Observer<User>;

    constructor() {
        this.userChange = new Observable((observer: Observer<User>) => {
            this.userChangeObserver = observer;
        })
    }

    ngOnInit(): void {
        if (window.localStorage.getItem('t_error_session')) {
            this.user = JSON.parse(window.localStorage.getItem('t_error_session'));
        } else {
            this.user = {
                isAuthenticated: false,
                firstName: '',
                lastName: '',
                login: '',
                email: ''
            };
        }
    }

    setUserInfos(userInfos: User) {
        this.user = userInfos;
        window.localStorage.setItem('t_error_session', JSON.stringify(this.user));
        this.userChangeObserver.next(this.user);
    }

}
