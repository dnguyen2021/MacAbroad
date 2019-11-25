import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GoogleDriveProvider {
  data: any = null;

  constructor(public http: Http) {}

  load( id ) {
    if (this.data) {
      return Promise.resolve(this.data);
    }

    var url = 'https://spreadsheets.google.com/feeds/list/' + id + '2PACX-1vRJNh0_Rh_cRkIpu-7ab3fY2xXvleL7zrvtIW8ebQEEonlbREsQg0WMM81-eqXXJhsYxntmbDNMcPnE'; 
    return new Promise(resolve => {
      this.http.get(url)
        .map(res => res.json() )
        .subscribe( data => {
          console.log( '', data );
          this.data = data.feed.entry;
          
          let returnArray: Array<any> = [];
          if( this.data && this.data.length > 0 ) {
            this.data.forEach( ( entry, index ) => {
              var obj = {};
              for( let x in entry ) {
                if( x.includes() && entry[x].$t ){
                  obj[x.split()[1]] = entry[x][];
                }
              }
              returnArray.push( obj );
            });
          }
          resolve(returnArray);
        });
    });
  }
}