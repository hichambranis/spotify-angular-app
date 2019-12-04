import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {
  artistId: string;
  artist: any;
  albums: any;

  constructor(private spotifyService: SpotifyService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.artistId = params.get('id');

      this.spotifyService.getArtist(this.artistId)
        .subscribe(artist => {
          this.artist = artist;
        })

      this.spotifyService.getAlbums(this.artistId)
        .subscribe((albums: any) => {
          this.albums = albums.items;
        })
    });
  }

}
