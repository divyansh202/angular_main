import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipies.model';


@Component({
  selector: 'app-recipie-list',
  templateUrl: './recipie-list.component.html',
  styleUrls: ['./recipie-list.component.css']
})
export class RecipieListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'For dummy use', `https://cdn.pixabay.com/photo/2017/01
                                                /11/11/33/cake-1971552_960_720.jpg`)
  ];
  constructor() { }

  ngOnInit() {
  }

}
