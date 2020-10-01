import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  gifs= new BehaviorSubject<any>([])

  giphyApiKey = `${environment.giphyApiKey}`;
  gifUrl = `${environment.gifUrl}`;
  

  constructor(private http:HttpClient) { }

  getTrendingGifs(){
    return this.http.get(`https://giphy.com/trending-gifs?
    giphyApiKey=%${environment.giphyApiKey}&limit=30`)
    .subscribe((response: any) => {
      this.gifs.next(response.data);
    });
  }

  searchGifs(gifName: string){
    return this.http.get(`https://giphy.com/search?q=${gifName}&
    giphyApiKey=%${environment.giphyApiKey}&limit=30`)
    .subscribe((response: any) => {
      this.gifs.next(response.data);
    });
  }

  getGifs(){
    return this.gifs.asObservable();
  }
}
