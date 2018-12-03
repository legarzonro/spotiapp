import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: []
})
export class CardsComponent {

  @Input() items:any[]=[];

  constructor(private router:Router) { }

  seeArtist(item:any){

    let artistID;

    if (item.type=='artist'){
      artistID= item.id;
    }else{
      artistID=item.artists[0].id
    }
    this.router.navigate(['/artist',artistID]);
  }

}
