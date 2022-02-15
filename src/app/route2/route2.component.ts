import { Component, OnInit } from '@angular/core';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-route2',
  templateUrl: './route2.component.html',
  styleUrls: ['./route2.component.css'],
})
export class Route2Component implements OnInit {
  faCaretDown = faCaretDown;
  items = [
    {
      id: 1,
      name: 'MVMTM',
      price: 3000,
      subName: 'Brown analog Watch - For Men',
      category: 'Watches',
      image: 'assets/categories_images/clock.jpg',
    },
    {
      id: 2,
      name: 'headset',
      price: 2000,
      subName: 'Brown analog Watch - For Men',
      category: 'Watches',
      image: 'assets/categories_images/clock.jpg',
    },
    {
      id: 3,
      name: 'Hour Glass',
      price: 1500,
      subName: 'Brown analog Watch - For Men',
      category: 'Watches',
      image: 'assets/categories_images/clock.jpg',
    },
    {
      id: 4,
      name: 'T shirt',
      price: 1000,
      subName: 'White T shirt',
      category: 'Fashion',
      image: 'assets/categories_images/clock.jpg',
    },
    {
      id: 5,
      name: 'Chair',
      price: 1000,
      subName: ' Chair',
      category: 'Fashion',
      image: 'assets/categories_images/clock.jpg',
    },
    {
      id: 6,
      name: 'Black long Sleeve Shirt',
      price: 1000,
      subName: 'White T shirt',
      category: 'Fashion',
      image: 'assets/categories_images/clock.jpg',
    },
    {
      id: 7,
      name: 'Blue and White Shirt',
      price: 1000,
      subName: 'Blue and white checked dress shirt',
      category: 'Fashion',
      image: 'assets/categories_images/clock.jpg',
    },
    {
      id: 8,
      name: 'Frame',
      price: 500,
      subName: 'Black flower frame',
      category: 'Frame',
      image: 'assets/categories_images/clock.jpg',
    },
    {
      id: 9,
      name: 'White shirt',
      price: 800,
      subName: 'Plain White shirt',
      category: 'fashion',
      image: 'assets/categories_images/clock.jpg',
    },
    {
      id: 10,
      name: 'White shirt',
      price: 120,
      subName: 'Plain White shirt',
      category: 'fashion',
      image: 'assets/categories_images/clock.jpg',
    },
    {
      id: 11,
      name: 'brown Shirt',
      price: 120,
      subName: '    white and blue cat-printed crew-neck T-shirt',
      category: 'fashion',
      image: 'assets/categories_images/clock.jpg',
    },
    {
      id: 12,
      name: 'MVMTM',
      price: 3000,
      subName: 'Brown analog Watch - For Men',
      category: 'Watches',
      image: 'assets/categories_images/clock.jpg',
    },
    {
      id: 13,
      name: 'headset',
      price: 2000,
      subName: 'Brown analog Watch - For Men',
      category: 'Watches',
      image: 'assets/categories_images/clock.jpg',
    },
    {
      id: 14,
      name: 'T shirt',
      price: 1000,
      subName: 'White T shirt',
      category: 'Fashion',
      image: 'assets/categories_images/clock.jpg',
    },
    {
      id: 15,
      name: 'Chair',
      price: 1000,
      subName: ' Chair',
      category: 'Fashion',
      image: 'assets/categories_images/clock.jpg',
    },
    {
      id: 16,
      name: 'Black long Sleeve Shirt',
      price: 1000,
      subName: 'White T shirt',
      category: 'Fashion',
      image: 'assets/categories_images/clock.jpg',
    },
    {
      id: 17,
      name: 'Blue and White Shirt',
      price: 1000,
      subName: 'Blue and white checked dress shirt',
      category: 'Fashion',
      image: 'assets/categories_images/clock.jpg',
    },
    {
      id: 18,
      name: 'Frame',
      price: 500,
      subName: 'Black flower frame',
      category: 'Frame',
      image: 'assets/categories_images/clock.jpg',
    },
    {
      id: 19,
      name: 'White shirt',
      price: 800,
      subName: 'Plain White shirt',
      category: 'fashion',
      image: 'assets/categories_images/clock.jpg',
    },
    {
      id: 20,
      name: 'White shirt',
      price: 120,
      subName: 'Plain White shirt',
      category: 'fashion',
      image: 'assets/categories_images/clock.jpg',
    },
    {
      id: 21,
      name: 'MVMTM',
      price: 3000,
      subName: 'Brown analog Watch - For Men',
      category: 'Watches',
      image: 'assets/categories_images/clock.jpg',
    },
    {
      id: 22,
      name: 'headset',
      price: 2000,
      subName: 'Brown analog Watch - For Men',
      category: 'Watches',
      image: 'assets/categories_images/clock.jpg',
    },
    {
      id: 23,
      name: 'Hour Glass',
      price: 1500,
      subName: 'Brown analog Watch - For Men',
      category: 'Watches',
      image: 'assets/categories_images/clock.jpg',
    },
    {
      id: 24,
      name: 'T shirt',
      price: 1000,
      subName: 'White T shirt',
      category: 'Fashion',
      image: 'assets/categories_images/clock.jpg',
    },
    {
      id: 25,
      name: 'Chair',
      price: 1000,
      subName: ' Chair',
      category: 'Fashion',
      image: 'assets/categories_images/clock.jpg',
    },
    {
      id: 26,
      name: 'Black long Sleeve Shirt',
      price: 1000,
      subName: 'White T shirt',
      category: 'Fashion',
      image: 'assets/categories_images/clock.jpg',
    },
    {
      id: 27,
      name: 'Blue and White Shirt',
      price: 1000,
      subName: 'Blue and white checked dress shirt',
      category: 'Fashion',
      image: 'assets/categories_images/clock.jpg',
    },
    {
      id: 28,
      name: 'Frame',
      price: 500,
      subName: 'Black flower frame',
      category: 'Frame',
      image: 'assets/categories_images/clock.jpg',
    },
    {
      id: 29,
      name: 'White shirt',
      price: 800,
      subName: 'Plain White shirt',
      category: 'fashion',
      image: 'assets/categories_images/clock.jpg',
    },
    {
      id: 30,
      name: 'White shirt',
      price: 120,
      subName: 'Plain White shirt',
      category: 'fashion',
      image: 'assets/categories_images/clock.jpg',
    },
    {
      id: 31,
      name: 'MVMTM',
      price: 3000,
      subName: 'Brown analog Watch - For Men',
      category: 'Watches',
      image: 'assets/categories_images/clock.jpg',
    },
    {
      id: 32,
      name: 'headset',
      price: 2000,
      subName: 'Brown analog Watch - For Men',
      category: 'Watches',
      image: 'assets/categories_images/clock.jpg',
    },
    {
      id: 33,
      name: 'Hour Glass',
      price: 1500,
      subName: 'Brown analog Watch - For Men',
      category: 'Watches',
      image: 'assets/categories_images/clock.jpg',
    },
    {
      id: 34,
      name: 'T shirt',
      price: 1000,
      subName: 'White T shirt',
      category: 'Fashion',
      image: 'assets/categories_images/clock.jpg',
    },
    {
      id: 35,
      name: 'Chair',
      price: 1000,
      subName: ' Chair',
      category: 'Fashion',
      image: 'assets/categories_images/clock.jpg',
    },
    {
      id: 36,
      name: 'Black long Sleeve Shirt',
      price: 1000,
      subName: 'White T shirt',
      category: 'Fashion',
      image: 'assets/categories_images/clock.jpg',
    },
    {
      id: 37,
      name: 'Blue and White Shirt',
      price: 1000,
      subName: 'Blue and white checked dress shirt',
      category: 'Fashion',
      image: 'assets/categories_images/clock.jpg',
    },
    {
      id: 38,
      name: 'Frame',
      price: 500,
      subName: 'Black flower frame',
      category: 'Frame',
      image: 'assets/categories_images/clock.jpg',
    },
    {
      id: 39,
      name: 'White shirt',
      price: 800,
      subName: 'Plain White shirt',
      category: 'fashion',
      image: 'assets/categories_images/clock.jpg',
    },
    {
      id: 40,
      name: 'White shirt',
      price: 800,
      subName: 'Plain White shirt',
      category: 'fashion',
      image: 'assets/categories_images/clock.jpg',
    },
  ];
  constructor() {}
  toggled = false;
  price = 'price';
  isGrid = true;
  ascendingOrder = false;
  descendingOrder = false;
  order = '';
  ngOnInit(): void {}
  togglePriceDropdown() {
    this.toggled = !this.toggled;
    console.log(this.toggled);
  }
  toggleGrid() {
    this.isGrid = true;
  }
  toggleList() {
    this.isGrid = false;
  }
  close(sort: string) {
    this.toggled = false;
    this.order = sort;
    // if(sort ==='ascending'){
    //   this.ascendingOrder = true;
    //   this.descendingOrder = false;
    //   this.order = sort;
    // } else if(sort ==='descending'){
    //   this.descendingOrder = true;
    //   this.ascendingOrder = false;

    // }
  }
}