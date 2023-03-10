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
   books = [
    {
        name: "Math1",
        type:"movie1",
        namep:"Kong1",
        pice:'30,000',
        namey:"Beam1",
        date:"16/08/2546"
    },
    {
        name: "Phy",
        type:"movie2",
        namep:"Kong1",
        pice:'15,000',
        namey:"Beam2",
        date:"14/12/2566"
  },
  {
        name: "Genchi",
        type:"movie3",
        namep:"kong3",
        pice:'10',
        namey:"z",
        date:"15/11/2565"
},
{
        name: "Math4",
        type:"movie4",
        namep:"kong4",
        pice:'20',
        namey:"q",
        date:"01/01/2556"
},
{
        name: "Math5",
        type:"movie5",
        namep:"koing5",
        pice:'30',
        namey:"j",
        date:"12/05/2544"
}
];
  searchname:any;
  searchtype:any;
  searchnamep:any;
  searchpice:any;
  searchnamey:any;
  searchdate:any;
constructor () { }

ngOnInit(): void {
}
}


