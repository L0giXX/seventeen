import { Component, OnInit } from '@angular/core';
import { MusicService } from './service/music.service';

@Component({
  selector: 'app-music',
  standalone: true,
  imports: [],
  templateUrl: './music.component.html',
  providers: [MusicService],
})
export class MusicComponent implements OnInit {
  constructor(private musicService: MusicService) {}

  private artistId = '7nqOGRxlXj7N2JYbgNEjYH';

  ngOnInit() {
    this.musicService.getAccessToken().subscribe((data) => {
      this.musicService
        .getAlbums(this.artistId, data.access_token)
        .subscribe((albums) => {
          console.log(albums);
        });
    });
  }
}
