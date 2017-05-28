import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'; 

import { User } from 'app/classes/user';

@Injectable()
export class UserService {

    public userChangeSource = new BehaviorSubject<any>(0);
    public user: Observable<User> = this.userChangeSource.asObservable();

    constructor() {
        if (window.localStorage.getItem('t_error_session')) {
            this.userChangeSource.next(JSON.parse(window.localStorage.getItem('t_error_session')));
        } else {
            this.userChangeSource.next({
                isAuthenticated: false,
                firstName: '',
                lastName: '',
                login: '',
                email: ''
            });
        }
    }

    setUserInfos(userInfos: User) {
        this.user.subscribe((user) => {
            window.localStorage.setItem('t_error_session', JSON.stringify(user));
        })
        this.userChangeSource.next(userInfos);
    }

}
