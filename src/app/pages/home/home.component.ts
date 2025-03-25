import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  featuredGames = [
    { name: 'Jogo A', image: 'assets/images/gameA.jpg', description: 'Jogo incrível para todas as idades!' },
    { name: 'Jogo B', image: 'assets/images/gameB.jpg', description: 'Aventura épica em um mundo aberto.' },
    { name: 'Jogo C', image: 'assets/images/gameC.jpg', description: 'Desafios emocionantes e gráficos fantásticos!' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
