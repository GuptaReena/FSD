import { Component } from '@angular/core';
import { WikiSearchService } from './wiki-search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wikipedia2';

  pages : any =[]

 

  constructor(private ap : WikiSearchService){}

  onSearch(value : string){
    console.log(value);
    this.ap.wikiSearch(value).subscribe(val =>{
      console.log(val);
      this.pages = val;
      this.pages = this.pages.query.search;
      console.log(this.pages);
      
      
    });
    
  }  

  
  
 
}
