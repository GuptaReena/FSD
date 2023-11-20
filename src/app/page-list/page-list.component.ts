import { Component, OnInit,Input } from '@angular/core';


@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent  {

  constructor() { }

  @Input() 
  pageList : any=[] 

  
  count : number = 0;
  pageSize=5;
  currentpage =1;

  
}
