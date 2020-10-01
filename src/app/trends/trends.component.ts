import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.css']
})
export class TrendsComponent implements OnInit, OnDestroy {
  gifs: any[] = [];
  subscription: Subscription;

  constructor(private dataService:DataService) { }
  

  ngOnInit(): void {
    this.dataService.getTrendingGifs()
    this.subscription = this.dataService.getGifs()
    .subscribe((response: any) => {
      this.gifs = response;
    });

    
    }

    ngOnDestroy(){ 
      this.subscription.unsubscribe();
    }
  }



