import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  title: string="FavoriteLinks"
  favLinks: string[]=["https://learn.launchcode.org/courses/191","https://www.w3schools.com/angular/"]
  constructor() { }

  ngOnInit() {
  }

}
