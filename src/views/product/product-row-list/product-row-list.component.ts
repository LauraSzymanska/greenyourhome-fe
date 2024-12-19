import {Component, HostListener} from '@angular/core';
import {ProductCardComponent} from '../product-card/product-card.component';
import {ProductData} from '../../../models/product-data';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-product-row-list',
  standalone: true,
  imports: [
    ProductCardComponent,
    TranslatePipe
  ],
  templateUrl: './product-row-list.component.html',
  styleUrl: './product-row-list.component.scss'
})
export class ProductRowListComponent{

  productList : ProductData[] = [
    {
      id: 1,
      name: "Monstera",
      price: 30.00,
      imageURL: "https://images.pexels.com/photos/4484185/pexels-photo-4484185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "",
      tags: []
    },
    {
      id: 2,
      name: "Filodendron",
      price: 50.00,
      imageURL: "https://images.pexels.com/photos/5527570/pexels-photo-5527570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "",
      tags: []
    },
    {
      id: 3,
      name: "Hoya",
      price: 30.00,
      imageURL: "https://images.pexels.com/photos/9413992/pexels-photo-9413992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "",
      tags: []
    },
    {
      id: 4,
      name: "Maranta",
      price: 17.00,
      imageURL: "https://images.pexels.com/photos/4590442/pexels-photo-4590442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "",
      tags: []
    },
    {
      id: 5,
      name: "Calathea",
      price: 20.00,
      imageURL: "https://images.pexels.com/photos/29309553/pexels-photo-29309553/free-photo-of-calathea-ornata-marantaceae.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "",
      tags: []
    },
    {
      id: 6,
      name: "Pilea",
      price: 10.00,
      imageURL: "https://images.pexels.com/photos/4496430/pexels-photo-4496430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "",
      tags: []
    },
    {
      id: 7,
      name: "Calathea Sanderiana",
      price: 40.00,
      imageURL: "https://images.pexels.com/photos/6754892/pexels-photo-6754892.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "",
      tags: []
    },
    {
      id: 8,
      name: "Philodendron White Knight",
      price: 20.00,
      imageURL: "https://images.pexels.com/photos/9414327/pexels-photo-9414327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "",
      tags: []
    },
    {
      id: 9,
      name: "Epipremnum Marble Queen",
      price: 15.00,
      imageURL: "https://images.pexels.com/photos/9414033/pexels-photo-9414033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "",
      tags: []
    },
  ]

  currentSlideIndex = 0;

  groupedList: ProductData[][] = []

  calculateGroups() {
    const remSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
    return Math.floor(window.innerWidth / ((18 + 1.5 + 1.5 + 1) * remSize));  // Card product width + margin left + margin right (in rem) + correction
  }

  @HostListener('window:resize')
  onResize(): void {
    const groupSize = this.calculateGroups();
    console.log(groupSize);
    this.updateGroupedList(groupSize);
  }

  updateGroupedList(groupSize: number): void {
    this.groupedList = [];

    for (let i = 0; i < this.productList.length; i += groupSize) {
      const group = this.productList.slice(i, i + groupSize);
      this.groupedList.push(group);
    }
  }

  goToNextSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.groupedList.length;
  }

  goToPreviousSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex - 1 + this.groupedList.length) % this.groupedList.length;
  }


  ngOnInit() {
    this.onResize();
  }

}
