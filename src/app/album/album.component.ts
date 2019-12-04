import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
  albumId: string;
  album: any;

  constructor(private spotifyService: SpotifyService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.albumId = params.get('id');

      this.spotifyService.getAlbum(this.albumId)
        .subscribe(data => {
          this.album = data;
        })
    });
  }

}
