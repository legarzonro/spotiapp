import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from './../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {

  artist: any={};
  topTracks: any[]=[];
  loading: boolean;
  loadingTracks: boolean;

  constructor(private router: ActivatedRoute, private _spotifyService: SpotifyService) {
    this.loading=true;
    this.loadingTracks=true;

    router.params.subscribe(params => {

      _spotifyService.getArtist(params.id).subscribe(resp => {
        console.log(resp);
        this.artist=resp;
        this.loading=false;
      });

      _spotifyService.getTopTracks(params.id).subscribe(resp=>{
        console.log(resp);
        this.topTracks=resp;
        this.loadingTracks=false;
      });
    });
  }

  ngOnInit() {
  }

}
