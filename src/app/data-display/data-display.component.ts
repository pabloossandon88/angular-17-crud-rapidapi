import { Component, OnInit, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LocalStorageService } from '../services/local-storage.service';


@Component({
  selector: 'app-data-display',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  template: '',
  styleUrl: './data-display.component.scss'
})
export class DataDisplayComponent implements OnInit{

  constructor(private localStorageService: LocalStorageService) {
    
  }

  url = 'https://rickandmortyapi.com/api/character';
  
  options = {
    method: 'GET',
    headers: {}
  };
  

  httpClient = inject(HttpClient);
  data: any[] = [];

  ngOnInit(): void {
    this.fetchData();
  }

  
  fetchData(){
    this.httpClient
    //.get('https://jsonplaceholder.typicode.com/posts')
    .get(this.url, this.options)
    .subscribe((data: any) => {
      
      if(data.results){
        this.localStorageService.setItem('data', JSON.stringify(data.results) );
      }
      


    });
    


  
    
  }

}
