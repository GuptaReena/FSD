import { Component, OnInit, Output,EventEmitter } from '@angular/core';



@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent  {

  @Output() transmitter = new EventEmitter<string>();

  term : string = '';
  
  onSubmit(event : any){
    event.preventDefault();
    console.log(this.term);
    this.transmitter.emit(this.term);
    
  }


}
