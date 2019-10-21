import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Success';
  image1 = 'https://www.launchcode.org/assets/icons/trophy-95e8cbe9bfda44123422302951deb1c92a237d39052669b8fbfafec00cb4f608.png';
  image2 = 'https://sial.school/wp-content/uploads/2018/12/believing-in-yourself-is-the-secret-to-success.jpg';
  image3 = 'https://i.ytimg.com/vi/8D9B6TfxCCY/maxresdefault.jpg';

  constructor() { }

  ngOnInit() {
  }

}