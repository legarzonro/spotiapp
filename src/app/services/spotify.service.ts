import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('servicio listo!');
  }

  getQuery(query: string){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer QADcBH0QkPJkQjRm7hyL18wZAzJ8A7WwxoSpuCb05WPK6xvUCzgmZCly5uggEM4tdSLL5zeRYLIsU13m0I'
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
    return this.getQuery(`artists/${id}/top-tracks?country=ES`).pipe(map(res=>res['tracks']));
  }
}
