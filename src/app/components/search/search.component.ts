import { Component, OnInit } from '@angular/core';
import { SpotifyService } from './../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  artists: any[]=[];
  loading: boolean;

  constructor(private _spotifyService:SpotifyService) {
    this.loading=false;
  }

  search(artistInput:string){
    if(artistInput){
      this.loading=true;
    }
    this._spotifyService.getArtists(artistInput).subscribe(resp=>{
      console.log(resp);
      this.artists=resp;
      this.loading=false;
    })
  }

}
