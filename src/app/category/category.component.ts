import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  categories: any;

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
    this.getAvailableCategories();
  }

  getAvailableCategories() {
    this.spotifyService.getAvailableCategories()
    .subscribe((data: any) => {
      this.categories = data.genres;
    })
  }

}
