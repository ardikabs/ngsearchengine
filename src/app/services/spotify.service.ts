import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService{
    private searchUrl:string;
    private redirect_uri:string ="http://localhost:3000";
    private client_id ='ca8d5e60f7874a76b8497953bf16a0a7';
    private client_secret ='f3e4b0d819444de69a4789ff29293c46';
    private access_token:string;
    private ArtistUrl: string;
    private AlbumsUrl:string;
    private AlbumUrl:string;
    private encoded = btoa(this.client_id + ':' + this.client_secret);
    private base64 = 'OTk2MDgwOTM3ZWJiNDU5NGEwOTc5MTQ2YzljMGMxMjE6MGJkYTNjZmQyMTNjNDYyMmJjNmM1NjI1ODY1NjhlYzg=';
    constructor(private _http:Http){

    }
    getToken(){
        // let params : URLSearchParams = new URLSearchParams();
        // params.set('grant_type' , 'client_credentials');
        // let body = params.toString();
         var params = ('grant_type=client_credentials');
 
         var headers = new Headers();
         headers.append('Access-Control-Allow-Origin','*');
         headers.append('Access-Control-Allow-Methods','POST,GET');
         headers.append('Access-Control-Request-Headers','Content-Type, Authorization');
         headers.append('Access-Control-Allow-Credentials', 'true');
         
        //  headers.append( 'Authorization', 'Basic ' + this.encoded);
         headers.append( 'Authorization', 'Basic Y2E4ZDVlNjBmNzg3NGE3NmI4NDk3OTUzYmYxNmEwYTc6ZjNlNGIwZDgxOTQ0NGRlNjlhNDc4OWZmMjkyOTNjNDY=');       
         headers.append( 'Content-Type' , 'application/x-www-form-urlencoded');
 
         return this._http.post('https://accounts.spotify.com/api/token', params , {headers : headers} )
         .map(res=> res.json());
      }

    searchMusic(str:string, type:string, token?:string){
        this.searchUrl = 'https://api.spotify.com/v1/search?query='+str+'&offset=0&limit=20&type='+type+'&market=US';
        let headers = new Headers();
        headers.append("Authorization","Bearer " + token);

        return this._http.get(this.searchUrl, {headers:headers})
            .map((res:Response) => res.json());
    }

    getArtist(artistId:string,token?:string){
        this.ArtistUrl = 'https://api.spotify.com/v1/artists/'+ artistId ;
        let headers = new Headers();
        headers.append("Authorization","Bearer " + token);

        return this._http.get(this.ArtistUrl, {headers:headers})
            .map((res:Response) => res.json());
    }

    getAlbums(artistId:string,token?:string){
        this.AlbumsUrl = 'https://api.spotify.com/v1/artists/'+ artistId +'/albums';
        let headers = new Headers();
        headers.append("Authorization","Bearer " + token);

        return this._http.get(this.AlbumsUrl, {headers:headers})
            .map((res:Response) => res.json());
    }

    getAlbum(albumId:string,token?:string){
        this.AlbumUrl = 'https://api.spotify.com/v1/albums/'+ albumId;
        let headers = new Headers();
        headers.append("Authorization","Bearer " + token);

        return this._http.get(this.AlbumUrl, {headers:headers})
            .map((res:Response) => res.json()); 
    }
}