import { Component, OnInit } from '@angular/core';

import { LoadedAnimation } from 'app/constants/loaded-animation';
import { VideosService } from 'app/services/videos.service';
import { Video } from 'app/classes/video';

import YoutubePlayer from 'youtube-player';

@Component({
    selector: 'app-videos',
    templateUrl: './videos.component.html',
    styleUrls: ['./videos.component.scss'],
    animations: [ LoadedAnimation ],
    providers: [ VideosService ]
})
export class VideosComponent implements OnInit {

    public youtubePlayer;

    public loadedState   : string = 'loading';
    public videos       : Video[];
    public currentVideo : Video;

    constructor(
        private videosService: VideosService
    ) { }

    ngOnInit() {
        let playerOptions = {
            height : '100%',
            width  : '100%'
        };

        this.youtubePlayer = YoutubePlayer('youtube-player', playerOptions);
        this.videosService.getVideos().subscribe(videos => {
            this.videos = videos;
            this.playVideo(this.videos[0]);
            this.loadedState   = 'loaded';
        });
    }

    public playVideo(video): void {
        this.currentVideo = video;
        this.youtubePlayer.loadVideoById(video.id);
    }
}
