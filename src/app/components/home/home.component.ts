import { Component, OnInit } from '@angular/core';
import { SpotifyService } from './../../services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  newReleases: any[] = [];
  loading: boolean;
  errorDisplay: boolean;

  constructor(private _spotifyService: SpotifyService) {
    
    this.loading=true;
    this.errorDisplay=false;

    _spotifyService.getNewRealeases().subscribe(resp => {
      this.newReleases=resp;
      this.loading=false;
    },err=>{
      console.log(err.error.error.message);
    });


  }

  ngOnInit() {
  }

}
