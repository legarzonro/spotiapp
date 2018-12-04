import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  access_token: string;
  clientID = 'f212d5b0aaad43ec9fb010ed4992ec4b';
  clientSecret = '0aaf170e88af4870a20ffe761f200a1c';

  constructor(private http: HttpClient) {
    console.log('servicio listo!');
    this.http.get('https://spotify-get-token.herokuapp.com/spotify/' + this.clientID + '/' + this.clientSecret).subscribe(
      (resp: any) => {
        this.access_token=resp.access_token;
      },
      err => {
        console.log(err);
      });
  }

  getQuery(query: string) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.access_token}`
    });
    return this.http.get(`https://api.spotify.com/v1/${query}`, { headers })
  }

  getNewRealeases() {
    return this.getQuery('browse/new-releases').pipe(map(res => res['albums'].items));
  }

  getArtists(artist: string) {
    return this.getQuery(`search?q=${artist}&type=artist&limit=15`).pipe(map(res => res['artists'].items));
  }

  getArtist(id: string) {
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=ES`).pipe(map(res => res['tracks']));
  }
}
