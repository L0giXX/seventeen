import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAlbum, IToken } from '../types/music.interface';

@Injectable({
  providedIn: 'root',
})
export class MusicService {
  constructor(private http: HttpClient) {}

  private clientId = '123';
  private clientSecret = '123';

  getAccessToken(): Observable<IToken> {
    const params = new HttpParams()
      .set('client_id', this.clientId)
      .set('client_secret', this.clientSecret)
      .set('grant_type', 'client_credentials');

    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/x-www-form-urlencoded',
    );

    return this.http.post<any>(
      'https://accounts.spotify.com/api/token',
      params.toString(),
      {
        headers,
      },
    );
  }

  getAlbums(id: string, access_token: string): Observable<IAlbum[]> {
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${access_token}`,
    );

    return this.http.get<IAlbum[]>(
      `https://api.spotify.com/v1/artists/${id}/albums`,
      {
        headers,
      },
    );
  }
}
