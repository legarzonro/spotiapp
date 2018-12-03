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

  getNewRealeases() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQD17dVSF06A5yvY4Uhzu9ZbduhTLcyZAvounI4ihJb2ItnAdFgoUme-1LWD_JFUmOe-09lgwvZMhPr0NIg'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers }).pipe(map(res => res['albums'].items));
  }

  getArtist(artist: string) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQD17dVSF06A5yvY4Uhzu9ZbduhTLcyZAvounI4ihJb2ItnAdFgoUme-1LWD_JFUmOe-09lgwvZMhPr0NIg'
    });
    return this.http.get(`https://api.spotify.com/v1/search?q=${artist}&type=artist&limit=15`, { headers }).pipe(map(res => res['artists'].items));
  }
}
