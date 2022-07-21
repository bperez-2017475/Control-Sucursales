import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-products',
  templateUrl: './Products.component.html',
  styleUrls: ['./Products.component.css']
})

export class ProductsComponent implements OnInit {
  events: any;
  role: any;
  idH : any;

  constructor(
    public activateRoute : ActivatedRoute,
  ) { 
  }

  ngOnInit(): void {
  }

  
}
