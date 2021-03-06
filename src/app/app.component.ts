import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Gif } from './trends/trends.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  gif: Gif[];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    return this.dataService.getTrendingGifs()
  }
  
}
