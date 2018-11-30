import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) {
    console.log('servicio listo!');
   }

   getNewRealeases(){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDNDcM96ieJUfoEZ2rLVYFXCSs8PhxUvJbMzC7SpYcNUc1-M7JdZTzCUDDC48csAsnBe5omZ2HFISr7Cm0'
    });

    this.http.get('https://api.spotify.com/v1/browse/new-releases',{headers}).subscribe(resp=>{
      console.log(resp);
    })
   }
}
