import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  private httpOptions: any = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + environment.access_token
    })
  };

  constructor(private http: HttpClient) { }

  searchMusic(searchKey: string, type = 'artist') {
    let searchEndpoint = environment.base_url + '/search?query=' + searchKey +
       '&offset=0&limit=20&type=' + type + '&market=US';
    return this.http.get(searchEndpoint, this.httpOptions);
  }

  getArtist(artistId: string) {
    let artistEndpoint = environment.base_url + '/artists/' + artistId;
    return this.http.get(artistEndpoint, this.httpOptions);
  }

  getAlbums(artistId: string) {
    let albumsEndpoint = environment.base_url + '/artists/' + artistId + '/albums';
    return this.http.get(albumsEndpoint, this.httpOptions);
  }

  getAlbum(artistId: string) {
    let albumEndpoint = environment.base_url + '/albums/' + artistId;
    return this.http.get(albumEndpoint, this.httpOptions);
  }

  getNewAlbumRelease() {
    let releaseEndpoint = environment.base_url + '/browse/new-releases?country=US&limit=12&offset=5';
    return this.http.get(releaseEndpoint, this.httpOptions);
  }

  getAvailableCategories() {
    let categoriesEndpoint = environment.base_url + '/recommendations/available-genre-seeds';
    return this.http.get(categoriesEndpoint, this.httpOptions);
  }
  
}
