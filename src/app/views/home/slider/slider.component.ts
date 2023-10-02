import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  currentIndex: number = 0;
  sliderItems: any[] = [];

  constructor() {}

  ngOnInit() {
    // Inicializa tu lista de imágenes (sliderItems) con las rutas de las imágenes.
    this.sliderItems = [
      "../assets/images/leon.jpg",
      "../assets/images/tigre.jpg",
      // Agrega más rutas de imágenes según sea necesario
    ];

    // Cambia automáticamente las imágenes cada 5 segundos (ajusta el tiempo según tus preferencias)
    setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.sliderItems.length) % this.sliderItems.length;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.sliderItems.length;
  }
}
