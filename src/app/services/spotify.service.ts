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
      'Authorization': 'Bearer BQA_m38oRli08yE4VKZrlP3_v-vvlE-ceDRYmNQKLjghTdeDEaD29QzOfB57S_f_nNvmtqG5JxMH467vH5A'
    });
    return this.http.get(`https://api.spotify.com/v1/${query}`, { headers })
  }

  getNewRealeases() {
    return this.getQuery('browse/new-releases').pipe(map(res => res['albums'].items));
  }

  getArtist(artist: string) {
    return this.getQuery(`search?q=${artist}&type=artist&limit=15`).pipe(map(res => res['artists'].items));
  }
}
