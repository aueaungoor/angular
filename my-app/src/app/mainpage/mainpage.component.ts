import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit{
  title(title: any){
    throw new Error('Method not implemented.');
  }
  searchBook:any;
   books = [
    {
        name: "a",
        type:"a",
        namep:"a",
        pice:'a',
        namey:"a",
        date:"a"
    },
    {
        name: "b",
        type:"b",
        namep:"b",
        pice:'b',
        namey:"b",
        date:"b"
  },
  {
      name: "b",
        type:"b",
        namep:"b",
        pice:'b',
        namey:"b",
        date:"b"
},
{
        name: "c",
        type:"c",
        namep:"c",
        pice:'c',
        namey:"c",
        date:"c"
},
{
        name: "e",
        type:"e",
        namep:"e",
        pice:'e',
        namey:"e",
        date:"e"
}
];
constructor () { }

ngOnInit(): void {
}
}


