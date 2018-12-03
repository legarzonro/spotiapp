import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer  } from '@angular/platform-browser';


@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor( private domSanitizer:DomSanitizer ){ }

  transform( value: string): any {
    if (value.split(":")[1]=='track'){
      return this.domSanitizer.bypassSecurityTrustResourceUrl( 'https://open.spotify.com/embed/track/' + value.split(":")[2] );
    }else{
      return null;
    }
  }
}