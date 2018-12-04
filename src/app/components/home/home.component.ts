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
  errorMessage: string;

  constructor(private _spotifyService: SpotifyService) {

    this.loading = true;
    this.errorDisplay = false;

    _spotifyService.getNewRealeases().subscribe(
      resp => {
        this.newReleases = resp;
        this.loading = false;
      },
      err => {
        this.errorMessage=err.error.error.message;
        this.errorDisplay=true;
        this.loading=false;
      });


  }

  ngOnInit() {
  }

}
