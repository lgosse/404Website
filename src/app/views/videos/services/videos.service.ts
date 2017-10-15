import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Injectable()
export class VideosService {

    videos: FirebaseListObservable<any>;

    constructor(
        private af: AngularFireDatabase
    ) {
        this.videos = af.list('/videos');
    }

    public getVideos(): FirebaseListObservable<any> {
        return this.videos;
    }

    public getVideo(videoKey: string): FirebaseObjectObservable<any> {
        return this.af.object(`/videos/${videoKey}`);
    }

    public removeVideo(videoKey: string): void {
        this.videos.remove(videoKey);
    }

}
