import { Component } from '@angular/core';



@Component({
  selector: 'app-data-table',
  imports: [],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.css'
})
export class DataTableComponent {

  data=[
    {
      Picture:'https://avatar.iran.liara.run/public/14',
      Name:
      "faysal",
      City: 'Dhaka',
      Country:'bangladesh',
   }
  ]

}
