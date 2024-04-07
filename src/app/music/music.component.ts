import { Component, OnInit } from '@angular/core';
import { MusicService } from './service/music.service';
import { IAlbum } from './types/music.interface';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-music',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './music.component.html',
  providers: [MusicService],
})
export class MusicComponent implements OnInit {
  albums: IAlbum[] = [];

  constructor(private musicService: MusicService) {}

  private artistId = '7nqOGRxlXj7N2JYbgNEjYH';

  ngOnInit() {
    this.musicService.getAccessToken().subscribe((data) => {
      this.musicService
        .getAlbums(this.artistId, data.access_token)
        .subscribe((albums) => {
          this.albums = albums;
        });
    });
  }
}
