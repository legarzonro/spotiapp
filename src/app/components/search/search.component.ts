import { Component, OnInit } from '@angular/core';
import { SpotifyService } from './../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  artists: any[]=[];

  constructor(private _spotifyService:SpotifyService) { }

  search(artistInput:string){
    this._spotifyService.getArtist(artistInput).subscribe(resp=>{
      console.log(resp);
      this.artists=resp;
    })
  }

}
