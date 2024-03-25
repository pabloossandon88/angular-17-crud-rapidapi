import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LocalStorageService } from './local-storage.service';
import { Character } from '../interfaces/character'


@Injectable({
  providedIn: 'root',
})



export class ApiConnect {

  
  data: any[] = [];
  character: any[] = [];
  /*
  this.character: (char : Character) => {
    id: 0,
    name: '',
    status: '',
    species: '',
    type: '',
    gender: 0,
    origin: {},
    location: {},
    img: '',
    episode: {},
    url: '',
    created: ''
  } 
  */

  
  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService,
  ) {
    this.getCharacters('https://rickandmortyapi.com/api/character');
    
    
    
  }
  
  
  ngOnInit(): void {
    //this.fetchData();
  }


  getCharacters( url : any ){
    console.log('getCharacters ::.:: ');

    const options = {
      method: 'GET',
      headers: {}
    };

    console.log('getCharacters ::.:: ');
    const httpClient = inject(HttpClient);
    console.log('getCharacters ::.:: ');
    httpClient
    .get(url, options)
    .subscribe((data: any) => {
      console.log('ddddddddd');
      if(data.results){
        this.localStorageService.setItem('data', JSON.stringify(data.results) );
      }
    });
  }

  
}
