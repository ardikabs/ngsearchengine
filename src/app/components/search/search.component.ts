import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

import {Artist} from '../../../../Artist';
import {Result} from '../../../../Result';


@Component({
  moduleId: module.id,
  selector: 'search',
  templateUrl: 'search.component.html',
  providers: [SpotifyService]
})
export class SearchComponent  {  
    searchStr : string;
    // searchRes : Artist[];
    searchRes: Result[];
    constructor(private _spotifyService:SpotifyService){}

    // searchMusic(){
    //     this._spotifyService.getToken()
    //         .subscribe(res=>{
    //             this._spotifyService.searchMusic(this.searchStr,'artist',res.access_token)
    //                 .subscribe(res =>{
    //                     console.log(res.artists.items);
    //                 });
    //         });
    // }

    searchQuery(){
        this._spotifyService.searchQuery(this.searchStr).subscribe(res=>{
            this.searchRes = res.result;
            console.log(res.result)
        });
    }
}
