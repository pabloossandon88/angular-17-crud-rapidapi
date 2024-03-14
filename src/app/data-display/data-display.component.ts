import { Component, OnInit, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { fromFetch } from 'rxjs/fetch';


@Component({
  selector: 'app-data-display',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  template: '',
  styleUrl: './data-display.component.scss'
})
export class DataDisplayComponent implements OnInit{

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
        localStorage.setItem('data', JSON.stringify(data.results) );
      }
      


    });
    


  
    
  }

}
