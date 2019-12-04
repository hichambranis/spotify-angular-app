import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchResult: any;
  newReleases:any;

  searchForm = new FormGroup({
    search: new FormControl('')
  });

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
    this.getNewAlbumRelease();
  }

  searchMusic() {
    this.spotifyService.searchMusic(this.searchForm.value.search)
      .subscribe((data: any) => {
        this.searchResult = data.artists.items;
      })
  }

  getNewAlbumRelease() {
    this.spotifyService.getNewAlbumRelease()
      .subscribe((data: any) => {
        this.newReleases = data.albums.items;
      })
  }

}
